// ProjectsPage.js
import { useState } from 'react'
import Header from './components/normal/Header'
import ProjectGrid from './components/project/ProjectGrid'
import Pagination from './components/project/Pagination'
import ProjectsData from './data/Projects'

export default function ProjectsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // Constants for pagination
  const cardsPerPageLarge = 12
  const cardsPerPageMedium = 8
  const cardsPerPageSmall = 4

  // Determine the screen size to adjust the number of cards per page
  const screenWidth = window.innerWidth

  const cardsPerPage =
    screenWidth >= 1024
      ? cardsPerPageLarge
      : screenWidth >= 768
      ? cardsPerPageMedium
      : cardsPerPageSmall

  const totalPages = Math.ceil(ProjectsData.length / cardsPerPage)

  // Get the current projects to display
  const currentProjects = ProjectsData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  )

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <Header />
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:items-start">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl  lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div>
                <p className="text-base font-semibold leading-7 text-indigo-600">Projects</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Explore our Projects
                </h1>

                <ProjectGrid currentProjects={currentProjects} />

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePreviousPage={handlePreviousPage}
                  handleNextPage={handleNextPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
