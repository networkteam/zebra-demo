import classNames from 'classnames';
import { createContext, useContext } from 'react';

type MultiColumnProps = {
  children?: React.ReactNode;
  className?: string;
  forwardProps?: boolean;
};

export const columnConfig = {
  columnCountTotal: 12,
  columnGap: 32,
};

const Multicolumn = ({ children, className, ...props }: MultiColumnProps) => {
  const classes = classNames('grid grid-cols-12 -m-4', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

type ColSpanRange = 3 | 4 | 6 | 8 | 9 | 12;

export type ColumnContextProps = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

type ColumnsProps = {
  xs?: ColSpanRange;
  sm?: ColSpanRange;
  md?: ColSpanRange;
  lg?: ColSpanRange;
  xl?: ColSpanRange;
  xxl?: ColSpanRange;
  children: React.ReactNode;
  className?: string;
};

export const ColumnContext = createContext<ColumnContextProps>({});

export const Column = ({ children, xs = 12, sm = 6, md, lg = 4, xl, xxl, className, ...props }: ColumnsProps) => {
  const columnContext = useContext(ColumnContext);

  const _xs = columnContext.xs && xs ? columnContext.xs / (columnConfig.columnCountTotal / xs) : xs;
  const _sm = columnContext.sm && sm ? columnContext.sm / (columnConfig.columnCountTotal / sm) : sm || _xs;
  const _md = columnContext.md && md ? columnContext.md / (columnConfig.columnCountTotal / md) : md || _sm;
  const _lg = columnContext.lg && lg ? columnContext.lg / (columnConfig.columnCountTotal / lg) : lg || _md;
  const _xl = columnContext.xl && xl ? columnContext.xl / (columnConfig.columnCountTotal / xl) : xl || _lg;
  const _xxl = columnContext.xxl && xxl ? columnContext.xxl / (columnConfig.columnCountTotal / xxl) : xxl || _xl;

  return (
    <ColumnContext.Provider value={{ xs: _xs, sm: _sm, md: _md, lg: _lg, xl: _xl, xxl: _xxl }}>
      <div
        className={classNames(
          'p-4',
          {
            [`col-span-${xs}`]: xs,
            [`sm:col-span-${sm}`]: sm,
            [`md:col-span-${md}`]: md,
            [`lg:col-span-${lg}`]: lg,
            [`xl:col-span-${xl}`]: xl,
            [`2xl:col-span-${xxl}`]: xxl,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    </ColumnContext.Provider>
  );
};

Multicolumn.Column = Column;

export default Multicolumn;
