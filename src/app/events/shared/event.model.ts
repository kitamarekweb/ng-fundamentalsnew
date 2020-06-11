// ng-fundamentalsnew\src\app\events\shared\event.model.ts START
export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: {
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  sessions: ISession[];
}

export interface ISession {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}

// ng-fundamentalsnew\src\app\events\shared\event.model.ts END
