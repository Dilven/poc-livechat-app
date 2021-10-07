export enum EventType {
  filled_form = "filled_form",
  message = "message",
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

export type User = { id: string; name: string };
export type Event = EventFilledForm | EventMessage;
export type Chat = { id: string; thread: { events: Event[] }; users: User[] };
