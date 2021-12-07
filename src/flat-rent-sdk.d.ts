interface IItemBasis{
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: [number,number],
  bookedDates: number [] | [],
}

interface IDateBaseJsonItem extends IItemBasis{
  price: number
}

interface IDateBaseJsonFormatted extends IItemBasis{
  totalPrice: number
}

interface ISearchParametersObj{
  city:string;
  checkInDate:Date;
  checkOutDate:Date;
  priceLimit?:number
}

export const database:readonly IDateBaseJsonItem[];

export function cloneDate(date:Date):Date;

export function addDays(date:Date, days:number):Date;

export class FlatRentSdk {
  get(id: string): Promise<IDateBaseJsonFormatted | null>;

  search(parameters:ISearchParametersObj):Promise<IDateBaseJsonFormatted[] | Error>;

  book(flatId:string, checkInDate:Date, checkOutDate:Date):Promise<number | Error>;

  private _assertDatesAreCorrect(checkInDate:Date, checkOutDate:Date):void;

  private _resetTime(date:Date):void ;

  private _calculateDifferenceInDays(startDate:Date, endDate:Date):number;

  private _generateDateRange(from:Date, to:Date):Date[];

  private _generateTransactionId():number;

  private _areAllDatesAvailable(flat:IDateBaseJsonItem, dateRange:Date[]):boolean;

  private _formatFlatObject(flat: IDateBaseJsonItem, nightNumber?: number): IDateBaseJsonFormatted;

  private _readDatabase(): null | IDateBaseJsonItem[];

  private _writeDatabase(database: IDateBaseJsonItem[]):void;

  private _syncDatabase(database: IDateBaseJsonItem[]): void;
}
