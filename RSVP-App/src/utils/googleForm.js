/* 
  Function to submit custom data to a Google Form.
  
  HOW TO SET UP:
  1. Create a Google Form with questions matching your fields:
     - Name (Short answer)
     - Dietary Requirements (Paragraph)
  2. Get the "pre-filled link":
     - Click the 3 dots menu -> "Get pre-filled link"
     - Fill in dummy data (e.g. name="NAME", dietary="DIET")
     - Click "Get Link" and copy it.
  4. Inspect the link to find the Entry IDs (e.g., &entry.123456=NAME)
  5. Paste the FORM_URL (the part before /viewform) and map the entry IDs below.
*/

export const submitToGoogleForm = async (formData) => {
<<<<<<< HEAD
  // TODO: PASTE YOUR GOOGLE FORM ACTION URL HERE
  // It usually looks like: https://docs.google.com/forms/u/0/d/e/LONG_ID_HERE/formResponse
  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc8vM2qbY2YPyfTikGywd15_ZBDxNkzkKVmVu1m87n2x-rt6A/formResponse'; 
  
  // TODO: MAP YOUR GOOGLE FORM ENTRY IDs HERE
  // Replace 'entry.xxxxxx' with the actual IDs from your pre-filled link
  const formEntries = {
    'entry.446531179': formData.name,       // Name field ID
    'entry.1330448021': formData.dietary     // Dietary requirements ID
=======
  // TODO: PASTE YOUR NEW RECEPTION GOOGLE FORM ACTION URL HERE
  // It usually looks like: https://docs.google.com/forms/u/0/d/e/LONG_ID_HERE/formResponse
  const FORM_URL = 'YOUR_GOOGLE_FORM_URL_HERE'; 
  
  // TODO: MAP YOUR NEW RECEPTION FORM ENTRY IDs HERE
  // Replace 'entry.xxxxxx' with the actual IDs from your pre-filled link
  // You can find these by getting a "pre-filled link" from your new Google Form
  const formEntries = {
    'entry.XXXXXX': formData.name,       // Name field ID
    'entry.XXXXXX': formData.dietary     // Dietary requirements ID
>>>>>>> e5aeb9c36d898e67e4ce44d874f09981c09cfe0e
  };
  
  // Convert to URLSearchParams for submission
  const formBody = new URLSearchParams();
  for (const [key, value] of Object.entries(formEntries)) {
    formBody.append(key, value);
  }

  try {
    if (FORM_URL === 'YOUR_GOOGLE_FORM_URL_HERE') {
      console.warn("Please configure your Google Form URL in src/utils/googleForm.js");
      // Simulate success for demo purposes if not configured
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true;
    }

    await fetch(FORM_URL, {
      method: 'POST',
      mode: 'no-cors', // Essential for Google Forms to allow the request
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });
    
    // With 'no-cors', we can't see the response status, so we assume success if no error was thrown.
    return true;
  } catch (error) {
    console.error("Error submitting to Google Form:", error);
    return false;
  }
};
