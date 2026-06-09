// 📊 قاعدة بيانات الشرائح (مع الحفاظ على علامات الترقيم والتنسيق)
const slidesData = [
     {
        image_name: "acuteSuppurativeAppendicitis.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "1- Acute Suppurative Appendicitis: \nTransverse section in the appendix shows: \n- The mucosa is partially shaded. \n- The mucosa, submucosa, muscle layer and serosa show dilated congested capillaries, and a cellular infiltrate composed of neutrophils, pus cells and macrophages"
    },
     {
        image_name: "earlyTbLymphnode.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "3- Early Tuberculosis, Lymph Node: \nTransverse section in the lymph node shows: \n- Pink rounded tubercles among blue lymphoid tissue. \n- The tubercle is formed of: \n- Epithelioid cells: Round or oval cells, with indistinct borders, pale pink cytoplasm, and round vesicular nuclei. \n- Langhan’s giant cells: Large cells with large number of round or oval nuclei arranged at the periphery as a circle or as a horse-shoe. \n- Lymphocytes: Encircle the tubercle."
    },
     {
        image_name: "lateTbLymphnode.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "4- Late Tuberculosis, Lymph Node: \nTransverse s bection in the lymph node shows: \n-The node is replaced by homogenous, structureless, and pink caseous material. \n- Fragments of nuclei appear as blue dots in the caseous material. \n-Tubercles in the periphery of the node are formed of epithelioid cells, Langhan’s giant cells and lymphocytes."
    },
     {
        image_name: "BilharziasisColon.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "5-Bilharziasis, Colon: \nTransverse section in the large intestine shows: \n- Bilharzial ova deposited mainly in the submucosa & to lesser extent in musculosa and serosa. \n- The ova are rounded with yellowish refractile shell. \n- The degenerated ova are pink and calcified ova are blue. \n- The ova are surrounded by chronic inflammatory cells; macrophages, eosinophils and lymphocytes."
    },
     {
        image_name: "BilharziasisUrinaryBlader.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "6-Bilharziasis, Urinary Bladder: \nTransverse section in the urinary bladder shows: \n- Bilharzial ova deposited mainly in the submucosa & to lesser extent in musculosa and serosa. \n- The mucosa shows area of hyperplasia. \n- The hyperplastic epithelium dips down in the submucosa forming Brunn’s nest. \n- Degeneration of the central cells of Brunn’s nest forming cystitis cystica."
    },
     {
        image_name: "infarctionSpleen.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "7- Infarction, Spleen: \nTransverse section in a spleen shows: \n- Normal area shows red pulp & white pulp. \n- Infarct area shows ghosts of the above structures appearing as granular pink tissue with blue nuclear fragments. \n- The zone between the normal & infarct areas shows inflammation."
    },
     {
        image_name: "fattyChangeLiver.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "8- Fatty Change, Liver: \nTransverse section in the liver shows: \n- Empty vacuoles in the cytoplasm of hepatocytes. \n- The vacuoles were occupied by fat which had dissolved in xylol & alcohol during preparation. \n- The nuclei are pushed by the accumulated fat against the cell membrane & become flattened giving the cells a signet ring appearance."
    },
     {
        image_name: "granulationTissue.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "9-Granulation Tissue: \nTransverse section in skin shows: \n- Homogenous pale pink ground substance - Spindle shaped fibroblast - Few pink collagen fibers - Many newly formed capillaries. \n- Chronic inflammatory cells mainly lymphocytes,plasma cells, macrophages."
    },
     {
        image_name: "keloid.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "10 - Keloid, Skin: \nTransverse section in the skin shows: \n- Epidermis: thin atrophic - Dermis: \n•• Heavy deposition of collagen bundles. \n•• Few scattered chronic inflammatory cells mainly lymphocytes."
    },
     {
        image_name: "nevus.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "11-Nevus, Skin: \nTransverse section in the skin shows: \n- Dermal nests or groups of nevus cells. \n- These cells are oval in shape with uniform oval vesicular nuclei. \n- The cytoplasm may show brownish melanin pigment."
    },
     {
        image_name: "lieomyoma.jpg", // تأكد أن اسم صورتك في المجلد هو lipoma.jpg بنفس الحروف
        correct_answer: "12- Leiomyoma:\nTransverse section in leiomyoma shows:\n- Bundles of smooth muscles alternating with bundles of fibrous tissue.\n- Muscle cell is spindle in shape with rod shaped nucleus.\n- Fibroblast is a short spindle cell with large spindle shaped nucleus.\n- The tumour has no fibrous capsule."
    },
    {
        image_name: "lipoma.jpg", // تأكد أن اسم صورتك في المجلد هو lipoma.jpg بنفس الحروف
        correct_answer: "13- Lipoma:\nTransverse section in lipoma shows:\n-The tumour is covered by a fibrous capsule sending septa dividing the tumour into lobules.\n- The tumour lobules are formed of mature fat cells, which appear as large, polygonal, and vacuolated cells.\n- The nuclei are flattened, eccentric and compressed against the cell membrane (signet ring appearance)."
    },
    {
        image_name: "cavernousHemangioma.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "14- Cavernous Haemangioma:\nTransverse section in cavernous haemangioma shows:\n- Large irregular vascular spaces lined by flat endothelium.\n- Some spaces are communicating.\n- They are separated by connective tissue.\n- Few lymphocytes and red blood cells are present in some spaces.\n- The tumour is not capsulated."
    },
   {
        image_name: "capillaryHemangioma.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "15-Capillary Haemangioma:\nSection in capillary haemangioma shows:\n- Numerous small vascular spaces lined by flat endothelium and separated by delicate connective tissue stroma.\n- The vascular spaces are round, oval, or irregular in shape.\n- Some are empty; others contain red blood cells.\n- The tumour is not capsulated."
    },
   {
        image_name: "squamousCellPapiloma.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "16- Squamous Cell Papilloma, Skin:\nTransverse section in the skin shows:\n- Connective tissue core covered by a thick hyperplastic squamous epithelium.\n- The hyperplasic squamous epithelium shows:\n- acanthosis (increased prickle cells) - parakeratosis (nucleated keratin) - hyperkeratosis (excess keratin)."
    },
     {
        image_name: "acuteSuppurativeAppendicitisComplicatedByGangrene.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "1- Acute Appendicitis Complicated By Gangrene: \nJar containing an appendix. \n-The appendix is markedly enlarged in size. \n-The outer surface shows dark blackish areas of gangrene and yellowish areas of pus."
    },
     {
        image_name: "appendicularMass.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "2- Appendicular Mass: \nJar containing an appendix and part of omentum. \n-The appendix is enlarged and swollen. \n- The surface shows areas of congestion together with excess fibrin and purulent exudate. \n-The wall of the appendix shows a perforation about 0.5cm. \n- A piece of omentum is adherent to the appendix to localize the inflammation thus creating an appendicular mass."
    },
     {
        image_name: "stones.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "4- Chronic cholecystitis with mixed gall stone: \nJar containing an opened gall bladder. \n-The gall bladder measures 10x 5cm, whitish in color with thick wall. \n-There is a solitary gall stone with a faceted surface. \n-The color of the stone is whitish with dark areas."
    },
     {
        image_name: "chronicPulmonaryTb.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "5-Chronic Fibrocaseous pulmonary tuberculosis. \n-The apical part of the lung shows an oval cavity measuring about 6x4 cm. \n-The inner wall of the cavity is irregular, grayish and dirty looking. \n- A zone of fibrosis surrounds the cavity and other multiple small cavities are seen. \n- The pleura is opaque white. \n- Hilar lymph nodes show anthracosis."
    },
     {
        image_name: "spleenTb.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "6- Multiple Tuberulomata of the spleen (Miliary T.B.): \nJar containing section of a spleen. \n-The outer surface is irregular and dark grayish in color. \n- Cut section shows multiple rounded tubercles of variable sizes (0.5-1.5 cm) and distributed through the whole cut section. \n-The tubercles are grayish yellow in color. \n-The splenic capsule is thick and opaque."
    },
     {
        image_name: "lymphTb.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "7- Caseating T.B. lymphadenitis (tabes mesenterica): \nJar containing enlarged mesenteric lymph nodes. \n-The lymph nodes are multiple, enlarged in size up to 4 cm and surrounded by a mesentery. \n-They are adherent together (matted) due to capsular periadenitis. \n- Cut section of the lymph nodes shows yellowish caseating material in the center."
    },
     {
        image_name: "cvcLiver.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "8-Chronic Venous Congestion with fatty change of the Liver: \n-Jar containing part of an enlarged liver. \n-The outer surface and the cut section of the liver show dark red foci of congestion alternating with yellow foci of fatty change giving the characteristic nutmeg appearance"
    },
     {
        image_name: "perisplenic.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "10-Infarction of the spleen, perisplenitis: \nJar containing spleen. \n-The spleen shows multiple wedge-shaped areas with their bases to the outer aspect and the apex to the center of the Spleen. \n-These areas are pale in color with surrounding zone of congestion. \n-The outer surface of the pale areas is depressed. \n-The capsule covering areas of infarction are adherent and inflamed"
    },
     {
        image_name: "thrombusLaminated.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "11-Vascular aneurysm with a laminated thrombus: \nJar containing an opened aneurysm. \n-It is saccular measuring about 8cm in diameter, globular in shape. \n-The lumen of the aneurysm is occupied by a mass of thrombosis, which shows alternative concentric layers (whitish pink areas alternating with dark red areas). \n-The center of the thrombus contains clotted blood."
    },
     {
        image_name: "propagatedThrombus.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "12-Propagated thrombus in a vein: \nJar containing part of a vein. \n-The lumen of the vein is obstructed by a dark brownish solid materiel all through its length."
    },
     {
        image_name: "footGangrene.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "13-Foot gangrene. \n-Jar containing leg of a baby. \n-The fore foot and toes are blackish in color, shrunken in size with areas of sloughed and macerated skin covering. \n-Lines of demarcation and separation are seen separating the proximal healthy tissue from the distal gangrenous parts."
    },
     {
        image_name: "lipomaJar.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "14- Lipoma: \n- Jar containing a fatty mass. \n-The mass is globular in shape, yellowish in color and measuring 15x7 cm. \n- The outer surface is smooth attached to it part of skin. \n- Cut section shows evident lobulation with no areas of hemorrhage or necrosis."
    },
     {
        image_name: "leiomyomaJar.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "15-Subserous, Submucous And Interstitial Leiomyoma Of the Uterus: \nJar containing an opened uterus, fallopian tubes and an ovaries. \n-The uterus is enlarged with irregular outer surface. \n-Cut section shows multiple rounded interstitial masses measuring 1-5 cm in diameter. \n-The masses have well defined edge and are surrounded by pseudocapules of compressed uterine muscles. Other multiple large submucous masses are present. \n-External surface shows rounded subserous masses giving it a lobulated appearance."
    },
     {
        image_name: "teratoma.jpg", // شريحة ثنائية تجريبية كمثال
        correct_answer: "16-Dermoid Cyst (Cystic Teratoma) of The Ovary: \nJar containing an enlarged ovary. \n-The ovary shows a large cyst measuring 25x20 cm. \n-The thickness of the wall of the cyst is about 0.2 cm. \n- The cyst is lined by a thin lining. \n-The lumen shows a tuft of hairs projecting from an elevated ridge within the wall."
    }
];

let currentIndex = 0; // المؤشر يبدأ من الشريحة الأولى (رقم 0)

// 🔄 دالة لتحديث الشريحة المعروضة على الشاشة
function updateSlide() {
    const currentSlide = slidesData[currentIndex];
    
    // تحديث الصورة
    document.getElementById("slideImage").src = currentSlide.image_name;
    
    // تنظيف صندوق النص والنتائج السابقة عند الانتقال
    document.getElementById("userDescription").value = "";
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "none";
    resultBox.innerHTML = "";
}

// ⬅️ الانتقال للشريحة التالية
function nextSlide() {
    if (currentIndex < slidesData.length - 1) {
        currentIndex++;
        updateSlide();
    } else {
        alert("هذه هي الشريحة الأخيرة!");
    }
}

// ➡️ العودة للشريحة السابقة
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    } else {
        alert("هذه هي الشريحة الأولى!");
    }
}

// 🧮 دالة التصحيح وحساب النسبة المئوية الذكية (تتجاهل علامات الترقيم أثناء الحساب)
function checkDescription() {
    // 1. جلب نص الطالب وتحويله لأحرف صغيرة
    const userText = document.getElementById("userDescription").value.trim().toLowerCase();
    
    if (userText === "") {
        alert("رجاءً اكتب وصفاً أولاً!");
        return;
    }

    const currentSlide = slidesData[currentIndex];

    // 2. التعديل الذكي: تنظيف النصوص تماماً من علامات الترقيم والرموز قبل تقسيمها
    const cleanUserText = userText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const cleanCorrectText = currentSlide.correct_answer.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    // 3. تقسيم النصوص إلى كلمات صافية بناءً على المسافات
    const userWords = cleanUserText.split(/\s+/);
    const correctWords = cleanCorrectText.split(/\s+/);

    // 4. حساب الكلمات المشتركة بين الطالب والكتاب
    let matchCount = 0;
    correctWords.forEach(word => {
        if (userWords.includes(word)) {
            matchCount++;
        }
    });

    // 5. حساب النسبة المئوية بدقة (تقريب لأقرب رقم عشري واحد)
    const score = ((matchCount / correctWords.length) * 100).toFixed(1);

    // 6. عرض النتيجة في المتصفح مع إظهار النص الأصلي بكامل تنسيقه وعلامات ترقيمه
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    resultBox.innerHTML = `
        نسبة التطابق: ${score}% <br>
        <strong style="color:#1e4e79; display:block; margin-top:10px;">الوصف الصحيح من الكتاب:</strong>
        <div style="text-align:left; direction:ltr; background:white; padding:12px; border-radius:6px; border:1px solid #ddd; margin-top:5px; white-space: pre-line; font-size:14px; color:#333; line-height:1.5;">
            ${currentSlide.correct_answer}
        </div>
    `;
}

// 🚀 تشغيل الشريحة الأولى تلقائياً عند فتح الموقع لأول مرة
window.onload = updateSlide;
