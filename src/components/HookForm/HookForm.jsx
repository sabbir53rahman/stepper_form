import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  FormLabel,
} from "@mui/material";

const HookForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl bg-white rounded-xl shadow-2xl p-10 space-y-6 transform hover:scale-105 transition-transform duration-300 ease-in-out"
        noValidate
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            Fill out the form below and let's connect!
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                fullWidth
                variant="outlined"
                className="rounded-lg"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                variant="outlined"
                className="rounded-lg"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gender */}
          <div>
            <FormLabel className="text-gray-700 mb-2 block">Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              )}
            />
            {errors.gender && (
              <p className="text-red-600 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  fullWidth
                  displayEmpty
                  variant="outlined"
                  className="rounded-lg"
                  error={!!errors.country}
                >
                  <MenuItem value="" disabled>
                    Select your country
                  </MenuItem>
                  <MenuItem value="usa">United States</MenuItem>
                  <MenuItem value="canada">Canada</MenuItem>
                  <MenuItem value="uk">United Kingdom</MenuItem>
                </Select>
              )}
            />
            {errors.country && (
              <p className="text-red-600 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                className="rounded-lg"
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <Button
            type="submit"
            variant="contained"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="outlined"
            className="border-indigo-500 text-indigo-500 hover:bg-indigo-50 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            onClick={() => reset()}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HookForm;
