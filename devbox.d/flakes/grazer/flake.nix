{
  description = "A revalidation queue for Neos and Next.js with @networkteam/zebra";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachSystem [ "aarch64-darwin" "x86_64-linux" "x86_64-darwin" ] (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        packages.default = pkgs.buildGoModule {
          pname = "grazer";
          version = "0.4.0";
          src = pkgs.fetchFromGitHub {
            owner = "networkteam";
            repo = "grazer";
            rev = "v0.4.0";
            sha256 = "sha256-/6JGzq3k3UYls6baqfVf+UHVCvwLyqQmLooV5qbm5jw=";
          };

          vendorHash = "sha256-TyVOQKvIssWhtxoZP7P2jz5dvXqCnA+h75e1DM6swt0";

          subPackages = ["cmd"];

          postBuild = ''
            mv $GOPATH/bin/cmd $GOPATH/bin/grazer
          '';
        };
      });
}
