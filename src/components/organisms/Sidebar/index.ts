import { ItemProps } from './libs/Item';
import { Props } from './props';
import { Item } from './types/Item';

export * from './component';
export { Item as SidebarItem } from './libs/Item';

export type SidebarProps = Props;
export type SidebarItemsType = ReadonlyArray<Item>;
export type SidebarItemProps = ItemProps;
