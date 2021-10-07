export enum EventType {
  filled_form = "filled_form",
  message = "message",
}

export enum UserType {
  customer = "customer",
  agent = "agent",
}

export type BasicEvent = {
  author_id: string;
  text: string;
};

export type EventFilledForm = BasicEvent & {
  type: EventType.filled_form;
};

export type EventMessage = BasicEvent & {
  type: EventType.message;
};

export type BasicUser = { id: string; name: string };

export type UserAgent = BasicUser & { type: UserType.agent };
export type UserCustomer = BasicUser & { type: UserType.customer };
export type User = UserAgent | UserCustomer;

export type Event = EventFilledForm | EventMessage;
export type Chat = { id: string; thread: { events: Event[] }; users: User[] };
