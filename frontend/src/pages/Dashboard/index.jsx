import { useState } from 'react'
import { Plus, Check, ArrowRight } from 'lucide-react'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { StatCard } from '../../components/ui/StatCard'
import { FilterTabs } from '../../components/common/FilterTabs'
import { ProgressBar } from '../../components/common/ProgressBar'

export default function Dashboard({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('all')

  const filterTabs = [
    { id: 'all', label: 'All (3)' },
    { id: 'sample', label: 'Sample Data (3)' },
    { id: 'custom', label: 'Custom Added (0)' },
  ]

  const sampleJobs = [
    {
      id: 'job-1',
      logo: 'ST',
      title: 'Senior Frontend Architect',
      company: 'Stripe',
      location: 'San Francisco, CA (Remote)',
      salary: '$185k - $235k',
      tags: ['React', 'TypeScript', 'Next.js', 'Design Systems'],
      score: 'Sample · 88%',
      keywords: 'React, TypeScript, Next.js',
    },
    {
      id: 'job-2',
      logo: 'LN',
      title: 'Staff Product Engineer',
      company: 'Linear',
      location: 'Remote (Global)',
      salary: '$195k - $245k · Full-time',
      tags: ['React', 'GraphQL', 'Performance', 'Real-time Sync'],
      score: 'Sample · 76%',
      keywords: 'React, GraphQL, Vite',
    },
    {
      id: 'job-3',
      logo: 'AN',
      title: 'Frontend Infrastructure Engineer',
      company: 'Anthropic',
      location: 'San Francisco, CA (Hybrid)',
      salary: '$160k - $210k',
      tags: ['React', 'TypeScript', 'GraphQL', 'REST APIs'],
      score: 'Sample · 64%',
      keywords: 'Python, TypeScript, APIs',
    },
  ]

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Overview of your CV compatibility, saved jobs, and applications.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            variant="secondary"
            size="md"
            onClick={() => onNavigate && onNavigate('my-cv')}
          >
            Upload CV
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={() => onNavigate && onNavigate('job-opportunities')}
          >
            <Plus size={15} />
            Add Job
          </Button>
        </div>
      </div>

      {/* Profile Completion Banner */}
      <Card className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="h-8 w-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
            <Check size={16} strokeWidth={3} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">
              Profile Completion: 60%
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Add skills and target role to improve matching.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <ProgressBar progress={60} className="w-44 sm:w-60" />
            <span className="text-xs font-semibold text-slate-700">
              60%
            </span>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('my-cv')}
            className="text-xs font-bold text-slate-900 hover:underline flex items-center gap-1 shrink-0"
          >
            Complete Profile <ArrowRight size={13} />
          </button>
        </div>
      </Card>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="CV Documents"
          value="1"
          note="Primary: Software_Engineer_CV.pdf"
        />
        <StatCard
          label="Saved Jobs"
          value="3"
          note="3 jobs ready for review"
          badge="Sample Data"
          badgeVariant="secondary"
        />
        <StatCard
          label="Analyses Completed"
          value="0"
          note="No analyses run yet"
          badge="Ready"
          badgeVariant="default"
        />
        <StatCard
          label="Applications"
          value="0"
          note="0 applications in progress"
          badge="0 Active"
          badgeVariant="secondary"
        />
      </div>

      {/* Main 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Recent Job Opportunities (8 cols ~66%) */}
        <Card className="lg:col-span-8 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Recent Job Opportunities
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Recent opportunities and match scores
              </p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('job-opportunities')}
              className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              Manage Job List (3) <ArrowRight size={12} />
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="pb-4">
            <FilterTabs
              tabs={filterTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </div>

          {/* Jobs List */}
          <div className="divide-y divide-slate-100">
            {sampleJobs.map((job) => (
              <div
                key={job.id}
                className="py-4 first:pt-2 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="h-10 w-10 rounded-lg bg-black text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {job.logo}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {job.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {job.company} · {job.location} · {job.salary}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-700 rounded border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">
                      Keywords: {job.keywords}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between shrink-0 gap-1.5 self-end sm:self-auto">
                  <Badge variant="score" className="px-2.5 py-1 text-xs">
                    {job.score}
                  </Badge>
                  <button
                    onClick={() => onNavigate && onNavigate('compatibility-analysis')}
                    className="text-xs font-semibold text-slate-700 hover:text-black underline mt-1"
                  >
                    Compare CV
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right Column: Next Steps & Explainable Scoring (4 cols ~34%) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Next Steps & Action Plan */}
          <Card className="p-5">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Next Steps & Action Plan
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Recommended actions
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {/* Step 01 */}
              <div className="p-3.5 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-black text-white rounded">
                    01
                  </span>
                  <h3 className="text-xs font-bold text-slate-900">
                    Add a Target Job
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Import a job description to identify key requirements.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('job-opportunities')}
                  className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1 mt-2.5"
                >
                  Add New Job <ArrowRight size={12} />
                </button>
              </div>

              {/* Step 02 */}
              <div className="p-3.5 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 text-[10px] font-bold border border-slate-300 text-slate-700 rounded">
                    02
                  </span>
                  <h3 className="text-xs font-bold text-slate-900">
                    Run Compatibility Analysis
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Compare your CV against target job requirements.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('compatibility-analysis')}
                  className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1 mt-2.5"
                >
                  Start Analysis <ArrowRight size={12} />
                </button>
              </div>

              {/* Step 03 */}
              <div className="p-3.5 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 text-[10px] font-bold border border-slate-300 text-slate-700 rounded">
                    03
                  </span>
                  <h3 className="text-xs font-bold text-slate-900">
                    Review Skill Recommendations
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Identify missing evidence and refine your profile.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('cv-recommendations')}
                  className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1 mt-2.5"
                >
                  View Compatibility Report <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </Card>

          {/* Explainable Scoring Principle Card */}
          <div className="bg-black text-white rounded-xl p-5 shadow-xs">
            <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              Matching Principle
            </p>
            <h3 className="text-sm font-bold text-white mt-1">
              Explainable Scoring
            </h3>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Scores reflect confirmed evidence in your CV against job requirements.
            </p>
            <button
              onClick={() => onNavigate && onNavigate('compatibility-analysis')}
              className="text-xs font-semibold text-white hover:underline flex items-center gap-1 mt-4"
            >
              Learn More <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
