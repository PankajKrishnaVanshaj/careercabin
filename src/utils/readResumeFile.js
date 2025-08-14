export async function readResumeFile(file) {
  if (typeof window === "undefined") {
    throw new Error("readResumeFile can only be run in the browser");
  }

  const [pdfjsLib, mammoth] = await Promise.all([
    import("pdfjs-dist/build/pdf"),
    import("mammoth/mammoth.browser"),
  ]);

  // ✅ Correct way: create a string URL for the worker
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  const arrayBuffer = await file.arrayBuffer();
  const fileName = file.name.toLowerCase();

  if (fileName.endsWith(".pdf")) {
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let textContent = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const text = await page.getTextContent();
      textContent += text.items.map((item) => item.str).join(" ") + "\n";
    }

    return textContent.trim();
  }

  if (fileName.endsWith(".docx")) {
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value.trim();
  }

  throw new Error("Unsupported file type. Please upload PDF or DOCX.");
}
