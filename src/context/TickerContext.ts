import { createContext } from 'react';
import { TICKS } from '../common/enums';

type EnumTypeTick = Record<TICKS, string>;

export interface IEnumTick extends EnumTypeTick {}
interface ITickerContext {
	tickName: string;
	setTickName?(tickName: string): any;
}
const tickName = 'PER_DAY';

export const TickerContext = createContext<ITickerContext>({ tickName });
