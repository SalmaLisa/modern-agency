
"use client";

import { useEffect, useState } from "react";
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type Project = {
  title: string;
  year: string;
  category: string;
  image: string;
};

type Service = {
  title: string;
  description: string;
};

type Award = {
  image: string;
  description: string;
};

type Content = {
  heroTitle: string;
  heroDescription: string;
  heroButtonText: string;
  heroButtonLink: string;
  satisfaction: string;
  projectsCompleted: string;
  feature1: string;
  feature2: string;
  feature3: string;
  founderImage1: string;
  founderImage2: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutButtonText: string;
  aboutButtonLink: string;
  awards: Award[];
  projects: Project[];
  servicesTitle: string;
  servicesDescription: string;
  services: Service[];
};

const initialContent: Content = {
  heroTitle: "Bigger, Bolder and Better",
  heroDescription:
    "Based in San Francisco, we're a digital product design & development studio that specializes in creating digital experiences.",
  heroButtonText: "Learn more",
  heroButtonLink: "/about",

  satisfaction: "95%",
  projectsCompleted: "125+",

  feature1: "Top-notch Experts",
  feature2: "Dedicated Support 24/7",
  feature3: "Flexible Pricing",

  founderImage1: "",
  founderImage2: "",
  aboutTitle:
    "We help business elevate their value through custom software development, product design, QA and consulting services.",
  aboutDescription:
    "We combine strategy, design and technology to build digital experiences that help businesses grow.",
  aboutButtonText: "View about us",
  aboutButtonLink: "/about",

  awards: [
  {
    image: "",
    description: "GoodFirms Star Rating",
  },
  {
    image: "",
    description: "Top 50 Clutch Companies",
  },
  {
    image: "",
    description: "Upwork Job Success",
  },
  {
    image: "",
    description: "Top 30 Design Team",
  },
],

  projects: [
    {
      title: "Archin Architecture Studio",
      year: "2023",
      category: "Branding / Web Design",
      image: "",
    },
    {
      title: "Zumar Construct Firm",
      year: "2023",
      category: "Web Design / Development",
      image: "",
    },
  ],

  servicesTitle: "Our Services",
  servicesDescription:
    "We create memorable websites, digital products and experiences.",

  services: [
    {
      title: "Branding",
      description: "Brand strategy, identity and visual systems.",
    },
    {
      title: "Design",
      description: "Digital product and interface design.",
    },
    {
      title: "Development",
      description: "Modern websites and digital experiences.",
    },
    {
      title: "Consulting",
      description: "Technology and product consulting.",
    },
  ],
};

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const labelClass =
  "mb-1.5 block text-sm font-medium text-gray-700";

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block min-w-0">
      <span className={labelClass}>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className={`${inputClass} resize-y`}
      />
    </label>
  );
}

function Section({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-100 px-5 py-4 sm:px-6">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-sm font-semibold text-white">
            {number}
          </span>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {title}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">{children}</div>
    </section>
  );
}

export default function EditPage() {
  const [content, setContent] = useState<Content>(initialContent);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
  async function loadContent() {
    try {
      const response = await fetch(
        `${API_URL}/api/website-content`
      );

      if (!response.ok) {
        throw new Error("Failed to load website content");
      }

      const data = await response.json();

      if (data) {
        setContent({
          ...initialContent,
          ...data,
        });
      }
    } catch (error) {
      console.error("Error loading website content:", error);
    }
  }

  loadContent();
}, []);

  function updateField<K extends keyof Content>(
    field: K,
    value: Content[K]
  ) {
    setContent((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  }

  function updateProject(
    index: number,
    field: keyof Project,
    value: string
  ) {
    setContent((prev) => ({
      ...prev,
      projects: prev.projects.map((project, i) =>
        i === index ? { ...project, [field]: value } : project
      ),
    }));
    setSaved(false);
  }

  function updateService(
    index: number,
    field: keyof Service,
    value: string
  ) {
    setContent((prev) => ({
      ...prev,
      services: prev.services.map((service, i) =>
        i === index ? { ...service, [field]: value } : service
      ),
    }));
    setSaved(false);
  }

  function updateAward(
    index: number,
    field: keyof Award,
    value: string
  ) {
    setContent((prev) => ({
      ...prev,
      awards: prev.awards.map((award, i) =>
        i === index ? { ...award, [field]: value } : award
      ),
    }));
    setSaved(false);
  }

async function saveChanges() {
  try {
    const response = await fetch(
      "http://localhost:5000/api/website-content",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to save content");
    }

    const result = await response.json();

    console.log("Saved content:", result);
    setSaved(true);
    alert("Content saved successfully!");
  } catch (error) {
    console.error("Save error:", error);
    alert("Failed to save content. Check the console.");
  }
}

 
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-medium text-blue-600">
              WEBSITE MANAGEMENT
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-950">
              Edit Website Content
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Manage each homepage section independently.
            </p>
          </div>

          <div className="flex gap-3">            

            <button
              type="button"
              onClick={saveChanges}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>

        {saved && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            Content saved successfully in this browser.
          </div>
        )}

        <div className="space-y-6">
          {/* 01 —  Main Banner */}
          <Section
            number="01"
            title="Main Banner"
            description="Edit your agency branding and main banner."
          >
           
            <TextAreaField
              label="Hero Heading"
              value={content.heroTitle}
              onChange={(v) => updateField("heroTitle", v)}
            />

            <TextAreaField
              label="Hero Description"
              value={content.heroDescription}
              onChange={(v) => updateField("heroDescription", v)}
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Button Text"
                value={content.heroButtonText}
                onChange={(v) => updateField("heroButtonText", v)}
              />
              <Field
                label="Button Link"
                value={content.heroButtonLink}
                onChange={(v) => updateField("heroButtonLink", v)}
                placeholder="/about"
              />
            </div>
          </Section>

          {/* 02 — Statistics */}
          <Section
            number="02"
            title="Statistics & Highlights"
            description="Edit the numbers and agency selling points."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Client Satisfaction"
                value={content.satisfaction}
                onChange={(v) => updateField("satisfaction", v)}
                placeholder="95%"
              />
              <Field
                label="Projects Completed"
                value={content.projectsCompleted}
                onChange={(v) => updateField("projectsCompleted", v)}
                placeholder="125+"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Highlight 1"
                value={content.feature1}
                onChange={(v) => updateField("feature1", v)}
              />
              <Field
                label="Highlight 2"
                value={content.feature2}
                onChange={(v) => updateField("feature2", v)}
              />
              <Field
                label="Highlight 3"
                value={content.feature3}
                onChange={(v) => updateField("feature3", v)}
              />
             
            </div>
          </Section>

          {/* 03 — About */}
          <Section
            number="03"
            title="About the Agency"
            description="Manage your introduction and founder images."
          >
            <TextAreaField
              label="About Heading"
              value={content.aboutTitle}
              onChange={(v) => updateField("aboutTitle", v)}
            />

            <TextAreaField
              label="About Description"
              value={content.aboutDescription}
              onChange={(v) => updateField("aboutDescription", v)}
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="About Button Text"
                value={content.aboutButtonText}
                onChange={(v) => updateField("aboutButtonText", v)}
              />
              <Field
                label="About Button Link"
                value={content.aboutButtonLink}
                onChange={(v) => updateField("aboutButtonLink", v)}
              />
              <Field
                label="Founder Image 1 URL"
                value={content.founderImage1}
                onChange={(v) => updateField("founderImage1", v)}
                placeholder="https://example.com/founder.jpg"
              />
              <Field
                label="Founder Image 2 URL"
                value={content.founderImage2}
                onChange={(v) => updateField("founderImage2", v)}
                placeholder="https://example.com/founder-2.jpg"
              />
            </div>
          </Section>

          
{/* 04 — Awards */}
<Section
  number="04"
  title="Awards & Recognition"
  description="Add an award image and its description."
>
  <div className="space-y-5">
    {content.awards.map((award, index) => (
      <div
        key={index}
        className="rounded-xl border border-gray-200 bg-gray-50 p-4"
      >
        <h3 className="mb-4 text-sm font-semibold text-gray-800">
          Award {String(index + 1).padStart(2, "0")}
        </h3>

        <div className="space-y-4">
          <Field
            label="Image URL"
            value={award.image}
            onChange={(v) => updateAward(index, "image", v)}
            placeholder="https://example.com/award.png"
          />

          {award.image && (
            <img
              src={award.image}
              alt={award.description || "Award"}
              className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain p-2"
            />
          )}

          <TextAreaField
            label="Description"
            value={award.description}
            onChange={(v) =>
              updateAward(index, "description", v)
            }
          />
        </div>

        <button
          type="button"
          onClick={() =>
            setContent((prev) => ({
              ...prev,
              awards: prev.awards.filter(
                (_, i) => i !== index
              ),
            }))
          }
          className="mt-4 text-sm font-medium text-red-600 hover:text-red-700"
        >
          Remove award
        </button>
      </div>
    ))}
  </div>

  <button
    type="button"
    onClick={() =>
      setContent((prev) => ({
        ...prev,
        awards: [
          ...prev.awards,
          { image: "", description: "" },
        ],
      }))
    }
    className="rounded-lg border border-dashed border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:border-blue-400 hover:bg-blue-50"
  >
    + Add Award
  </button>
</Section>

          {/* 05 — Featured projects */}
          <Section
            number="05"
            title="Featured Works"
            description="Manage your portfolio project cards."
          >
            <div className="space-y-5">
              {content.projects.map((project, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                >
                  <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Project {String(index + 1).padStart(2, "0")}
                  </h3>

                  <div className="space-y-4">
                    <Field
                      label="Project Title"
                      value={project.title}
                      onChange={(v) =>
                        updateProject(index, "title", v)
                      }
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Year"
                        value={project.year}
                        onChange={(v) =>
                          updateProject(index, "year", v)
                        }
                      />
                      <Field
                        label="Category"
                        value={project.category}
                        onChange={(v) =>
                          updateProject(index, "category", v)
                        }
                      />
                    </div>

                    <Field
                      label="Project Image URL"
                      value={project.image}
                      onChange={(v) =>
                        updateProject(index, "image", v)
                      }
                      placeholder="https://example.com/project.jpg"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setContent((prev) => ({
                        ...prev,
                        projects: prev.projects.filter(
                          (_, i) => i !== index
                        ),
                      }))
                    }
                    className="mt-4 text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    Remove project
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setContent((prev) => ({
                  ...prev,
                  projects: [
                    ...prev.projects,
                    {
                      title: "",
                      year: "",
                      category: "",
                      image: "",
                    },
                  ],
                }))
              }
              className="rounded-lg border border-dashed border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:border-blue-400 hover:bg-blue-50"
            >
              + Add Project
            </button>
          </Section>

          {/* 06 — Services */}
          <Section
            number="06"
            title="Our Services"
            description="Manage service titles and descriptions."
          >
            <Field
              label="Services Section Heading"
              value={content.servicesTitle}
              onChange={(v) => updateField("servicesTitle", v)}
            />

            <TextAreaField
              label="Services Introduction"
              value={content.servicesDescription}
              onChange={(v) => updateField("servicesDescription", v)}
            />

            <div className="space-y-5">
              {content.services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                >
                  <h3 className="mb-4 text-sm font-semibold text-gray-800">
                    Service {String(index + 1).padStart(2, "0")}
                  </h3>

                  <div className="space-y-4">
                    <Field
                      label="Service Title"
                      value={service.title}
                      onChange={(v) =>
                        updateService(index, "title", v)
                      }
                    />
                    <TextAreaField
                      label="Service Description"
                      value={service.description}
                      onChange={(v) =>
                        updateService(index, "description", v)
                      }
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setContent((prev) => ({
                        ...prev,
                        services: prev.services.filter(
                          (_, i) => i !== index
                        ),
                      }))
                    }
                    className="mt-4 text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    Remove service
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setContent((prev) => ({
                  ...prev,
                  services: [
                    ...prev.services,
                    { title: "", description: "" },
                  ],
                }))
              }
              className="rounded-lg border border-dashed border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:border-blue-400 hover:bg-blue-50"
            >
              + Add Service
            </button>
          </Section>

          {/* Bottom save button */}
          <div className="sticky bottom-4 flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur">
            <p className="hidden text-sm text-gray-500 sm:block">
              Save your edits before leaving this page.
            </p>
            <button
              type="button"
              onClick={saveChanges}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 sm:ml-auto sm:w-auto"
            >
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}