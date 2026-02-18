"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects, stateNames } from "@/lib/data";

const allCategories = Array.from(new Set(projects.map((p) => p.category)));
const allStates = Array.from(new Set(projects.map((p) => p.state)));

export default function ProjectsPage() {
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterState, setFilterState] = useState("All");

  const filtered = projects.filter((p) => {
    const matchCat = filterCategory === "All" || p.category === filterCategory;
    const matchState = filterState === "All" || p.state === filterState;
    return matchCat && matchState;
  });

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-navy-500 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
        
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold 
              uppercase tracking-wider mb-4 bg-white/10 text-accent-300 border border-white/5">
              Projects
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Our Work
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
              200+ projects delivered across multiple states, serving India&apos;s 
              largest industrial organizations with excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid with Filters */}
      <section className="section-standard bg-gray-50/50">
        <div className="container-max">
          <SectionHeader
            badge="Portfolio"
            title="Completed Projects"
            subtitle="Filter by service category or location to explore our extensive project portfolio."
          />

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterCategory("All")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filterCategory === "All"
                    ? "bg-accent-500 text-white shadow-md"
                    : "bg-white text-navy-600 border border-gray-200 hover:border-accent-300"
                }`}
              >
                All Categories
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    filterCategory === cat
                      ? "bg-accent-500 text-white shadow-md"
                      : "bg-white text-navy-600 border border-gray-200 hover:border-accent-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* State Filter */}
            <div className="flex flex-wrap gap-2 lg:ml-auto">
              <button
                onClick={() => setFilterState("All")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filterState === "All"
                    ? "bg-navy-500 text-white shadow-md"
                    : "bg-white text-navy-600 border border-gray-200 hover:border-navy-300"
                }`}
              >
                All States
              </button>
              {allStates.map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterState(st)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    filterState === st
                      ? "bg-navy-500 text-white shadow-md"
                      : "bg-white text-navy-600 border border-gray-200 hover:border-navy-300"
                  }`}
                >
                  {stateNames[st] || st}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-navy-500/50 mb-6">
            Showing <span className="font-semibold text-navy-600">{filtered.length}</span> of{" "}
            <span className="font-semibold text-navy-600">{projects.length}</span> projects
          </p>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filterCategory}-${filterState}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} {...project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-navy-500 mb-1">
                No projects match the selected filters.
              </p>
              <p className="text-sm text-navy-500/50">
                Try adjusting your filter criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
