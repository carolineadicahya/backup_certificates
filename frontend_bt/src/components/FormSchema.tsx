export type FieldType = "text" | "textarea" | "select" | "checkbox";
export type Category = "KI" | "KH" | "KT";
export type Certificates = "health" | "quarantine";

export interface BaseField {
  type: FieldType;
  name: string;
  label: string;
}

export interface TextField extends BaseField {
  type: "text";
  placeholder?: string;
}

export interface TextAreaField extends BaseField {
  type: "textarea";
  placeholder?: string;
}

export interface SelectFieldType extends BaseField {
  type: "select";
  options: string[];
}

export interface CheckboxField extends BaseField {
  type: "checkbox";
  description?: string;
  defaultChecked?: boolean;
}

export type FormField =
  | TextField
  | TextAreaField
  | SelectFieldType
  | CheckboxField;

export const formSchema: Record<
  Certificates,
  Partial<Record<Category, FormField[]>>
> = {
  health: {
    KI: [
      { type: "text", name: "nama", label: "Nama Ikan", placeholder: "Lele" },
      {
        type: "text",
        name: "spesies",
        label: "Spesies",
        placeholder: "Clarias",
      },
      {
        type: "checkbox",
        name: "habitat",
        label: "Habitat Liar",
        description: "Centang jika ikan berasal dari alam liar",
      },
      { type: "text", name: "tanggal", label: "Tanggal Pemeriksaan" },
    ],
    KH: [
      { type: "text", name: "nama", label: "Nama Hewan" },
      { type: "text", name: "spesies", label: "Spesies" },
      { type: "textarea", name: "kondisi", label: "Kondisi Kesehatan" },
    ],
    KT: [
      { type: "text", name: "nama", label: "Nama Tanaman" },
      { type: "text", name: "varietas", label: "Varietas" },
    ],
  },

  quarantine: {
    KI: [
      { type: "text", name: "lokasi", label: "Lokasi Karantina" },
      { type: "text", name: "suhu", label: "Suhu Air" },
    ],
    KH: [
      { type: "text", name: "lokasi", label: "Lokasi Karantina" },
      { type: "text", name: "kandang", label: "Jenis Kandang" },
    ],
    KT: [{ type: "text", name: "lokasi", label: "Lokasi Karantina" }],
  },
};
