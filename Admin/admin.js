/* ======================================================
   1️⃣ SUPABASE INITIALIZATION
====================================================== */

const SUPABASE_URL = "https://fcjaixnxhiojzjjhxyya.supabase.co";
const SUPABASE_KEY = "sb_publishable_8SOcghGyPASkhbpYLTmfSQ_VMLhToMZ";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);



/* ======================================================
   2️⃣ LOGIN FUNCTION
====================================================== */

async function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Login Failed: " + error.message);
  } else {
    alert("Login Successful");
    window.location.href = "dashboard.html";
  }
}



/* ======================================================
   3️⃣ SESSION CHECK (Protect Dashboard)
====================================================== */

async function checkUser() {

  const { data: { user } } = await supabaseClient.auth.getUser();

  if (!user) {
    window.location.href = "login.html";
  }
}

if (window.location.pathname.includes("dashboard.html")) {
  checkUser();
}



/* ======================================================
   4️⃣ LOGOUT
====================================================== */

async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = "login.html";
}



/* ======================================================
   5️⃣ IMAGE UPLOAD FUNCTION
====================================================== */

async function uploadImage() {

  const file = document.getElementById("imageInput").files[0];

  if (!file) {
    alert("Please select an image");
    return;
  }

  const fileName = Date.now() + "-" + file.name;

  // Upload to Storage
  const { error: uploadError } = await supabaseClient.storage
    .from("Gallery-images")
    .upload(fileName, file);

  if (uploadError) {
    alert("Upload failed: " + uploadError.message);
    return;
  }

  // Build Public URL
  const publicUrl =
    `${SUPABASE_URL}/storage/v1/object/public/Gallery-images/${fileName}`;

  // Insert into database (lowercase gallery table)
  const { error: dbError } = await supabaseClient
    .from("gallery")
    .insert([{ image_url: publicUrl }]);

  if (dbError) {
    alert("Database error: " + dbError.message);
  } else {
    alert("Image uploaded successfully!");
    loadAdminGallery();
  }
}



/* ======================================================
   6️⃣ LOAD GALLERY IMAGES
====================================================== */

async function loadAdminGallery() {

  const { data, error } = await supabaseClient
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Load error:", error.message);
    return;
  }

  const container = document.getElementById("admin-gallery");
  if (!container) return;

  container.innerHTML = "";

  if (!data || data.length === 0) {
    container.innerHTML = "<p>No images uploaded yet.</p>";
    return;
  }

  data.forEach(item => {
    container.innerHTML += `
      <img src="${item.image_url}"
           width="150"
           style="margin:10px; border-radius:8px;">
    `;
  });
}



/* ======================================================
   7️⃣ AUTO LOAD ON GALLERY PAGE
====================================================== */

if (window.location.pathname.includes("gallery.html")) {
  loadAdminGallery();
}