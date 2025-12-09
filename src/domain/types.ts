export interface ScheduleDay {
  day: string;
  open: string | null;   // "7:00 a. m." o null si cerrado
  close: string | null;  // "2:00 p. m." o null si cerrado
}

export interface MenuItem {
  name: string;
  tortilla: ("harina" | "maiz")[];
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  mapEmbedUrl: string;
}
