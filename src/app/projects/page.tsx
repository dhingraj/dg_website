"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects, stateNames } from "@/lib/data";

const allCategories = Array.from(new Set(projects.map((p) => p.category)));
const allStates = Array.from(new Set(projects.map((p) => p.state)));

export default function ProjectsPage() {
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterState, setFilterState] = useState("All");

  const filtered = projects.filter((p) => {
    const matchCat =
      filterCategory === "All" || p.category === filterCategory;
    const matchState = filterState === "All" || p.state === filterState;
    return matchCat && matchState;
  });

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-navy-500 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/15 via-transparent to-transparent" />
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-white/10 text-accent-300">
              Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Our Work
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              200+ projects delivered across multiple states, serving India&apos;s
              largest industrial organizations with excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-max">
          <SectionHeader
            badge="Portfolio"
            title="Completed Projects"
            subtitle="Filter by service category or location to explore our work"
          />

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterCategory("All")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterCategory === "All"
                    ? "bg-accent-500 text-white shadow-md"
                    : "bg-white text-navy-500/70 border border-gray-200 hover:border-accent-300"
                }`}
              >
                All Categories
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    filterCategory === cat
                      ? "bg-accent-500 text-white shadow-md"
                      : "bg-white text-navy-500/70 border border-gray-200 hover:border-accent-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* State Filter */}
            <div className="flex flex-wrap gap-2 sm:ml-auto">
              <button
                onClick={() => setFilterState("All")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterState === "All"
                    ? "bg-navy-500 text-white shadow-md"
                    : "bg-white text-navy-500/70 border border-gray-200 hover:border-navy-300"
                }`}
              >
                All States
              </button>
              {allStates.map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterState(st)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    filterState === st
                      ? "bg-navy-500 text-white shadow-md"
                      : "bg-white text-navy-500/70 border border-gray-200 hover:border-navy-300"
                  }`}
                >
                  {stateNames[st] || st}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-navy-500/40 mb-6">
            Showing {filtered.length} of {projects.length} projects
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-navy-500/40">
              <p className="text-lg font-medium">No projects match the selected filters.</p>
              <p className="text-sm mt-2">Try adjusting your filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

