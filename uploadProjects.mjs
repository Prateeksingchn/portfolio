import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { projectsData } from "./src/data/projectsData.js";

const firebaseConfig = {
    apiKey: "AIzaSyDUhZVLYNcGuDFWHf_iky1xX-Nf-kYGA1s",
    authDomain: "portfolio-d9078.firebaseapp.com",
    projectId: "portfolio-d9078",
    storageBucket: "portfolio-d9078.appspot.com",
    messagingSenderId: "361968741013",
    appId: "1:361968741013:web:f644a2277670127af4899c",
    measurementId: "G-RWZZT6ZHNH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadProjects() {
  const projectsCollection = collection(db, "projects");
  let successCount = 0;
  let errorCount = 0;

  for (const project of projectsData) {
    try {
      const docRef = await addDoc(projectsCollection, project);
      console.log(`Added project: ${project.title} with ID: ${docRef.id}`);
      successCount++;
    } catch (error) {
      console.error(`Error adding project ${project.title}:`, error);
      errorCount++;
    }
  }

  console.log(`Upload complete. Successes: ${successCount}, Errors: ${errorCount}`);
}

uploadProjects().then(() => {
  console.log("Script execution completed");
  process.exit();
}).catch(error => {
  console.error("Unhandled error in script execution:", error);
  process.exit(1);
});