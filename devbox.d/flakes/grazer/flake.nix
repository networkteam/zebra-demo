{
  description = "A revalidation queue for Neos and Next.js with @networkteam/zebra";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
  };

  outputs = {nixpkgs, ...}: let
    # you can also put any architecture you want to support here
    # i.e. aarch64-darwin for never M1/2 macbooks
    system = "aarch64-darwin";
    pname = "grazer";
  in {
    packages.${system} = let
      pkgs = nixpkgs.legacyPackages.${system}; # this gives us access to nixpkgs as we are used to
    in {
      default = pkgs.buildGoModule {
        name = pname;
        src = pkgs.fetchFromGitHub {
          owner = "networkteam";
          repo = "grazer";
          rev = "v0.4.0";
          hash = "sha256-/6JGzq3k3UYls6baqfVf+UHVCvwLyqQmLooV5qbm5jw=";
        };

        vendorHash = "sha256-TyVOQKvIssWhtxoZP7P2jz5dvXqCnA+h75e1DM6swt0";

        subPackages = ["cmd"];

        # Rename the binary after build
        postBuild = ''
          mv $GOPATH/bin/cmd $GOPATH/bin/grazer
        '';
      };
    };
  };
}
