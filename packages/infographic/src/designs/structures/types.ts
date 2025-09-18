import type { ComponentType } from '@antv/infographic-jsx';
import type { Data } from '../../types';
import { TitleProps } from '../components';
import type { BaseItemProps } from '../items';

export interface BaseStructureProps {
  Title?: ComponentType<Pick<TitleProps, 'title' | 'desc'>>;
  Item: ComponentType<BaseItemProps>;
  data: Data;
  design?: {
    title?: TitleProps;
    item?: BaseItemProps;
  };
}

export interface StructureRegistration<
  T extends BaseStructureProps = BaseStructureProps,
> {
  type: string;
  component: ComponentType<T>;
}
