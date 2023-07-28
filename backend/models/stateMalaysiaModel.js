import mongoose from 'mongoose';

const malaysiaStateSchema = new mongoose.Schema(
  {
    administrative_division: { type: String, required: true },
    state: { type: String, required: true, unique: true },
    capital: { type: String, required: true, unique: true },
    population: { type: Number, required: true, unique: true },
    total_area: { type: Number, required: true, unique: true },
    licence_plate_prefix: { type: String, required: true, unique: true },
    phone_area_code: { type: String, required: true },
    abbreviation: { type: String, required: true, unique: true },
    ISO: { type: String, required: true, unique: true },
    HDI: { type: Number, required: true, unique: true },
    region: { type: String, required: true },
    head_of_state: { type: String, required: true },
    head_of_goverment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const malaysiaState = mongoose.model('malaysiaState', malaysiaStateSchema);

export default malaysiaState;
