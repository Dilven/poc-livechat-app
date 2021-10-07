export enum EventType {
  filled_form = "filled_form",
  message = "message",
}

export type BasicEvent = {
  author_id: string;
};

export type EventFilledForm = {
  event: EventType.filled_form;
};

export type EventMessage = {
  event: EventType.message;
};
export type Event = EventFilledForm | EventMessage;
export type Chat = { id: string; thread: { events: Event[] } };
