import { createClient } from "https://esm.sh/@supabase/supabase-js@2.25.0";
import { CreateUserModel } from "../models/Users/CreateUserModel";
import { LoginUserModel } from "../models/Users/LoginUserModel";

const options = {
  schema: "public",
  headers: { "x-my-custom-header": "tindecken_todo" },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};

const supabase = createClient(
  "https://tuozygdpgeoyogkkplvq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1b3p5Z2RwZ2VveW9na2twbHZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY4ODEwMjksImV4cCI6MjAwMjQ1NzAyOX0.umXI-zFV_lwJj6QVuztpP7gO6ut6sglROijEOmVDh0U",
  options
);

const login = async (loginUserModel: LoginUserModel) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: loginUserModel.Email,
    password: loginUserModel,
  })
  if (error == null) return data
  else return error
}

const createNewUser = async (createUserModel: CreateUserModel) => {
  const { data, error } = await supabase.auth.signUp({
    email: createUserModel.Email,
    password: createUserModel.Password,
  })
  if (error == null) return data
  else return error
}

export { createNewUser, login }