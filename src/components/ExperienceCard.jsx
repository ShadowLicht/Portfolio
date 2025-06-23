
import { useState } from "react"
import { Building2, Calendar, MapPin } from "lucide-react"

const ExperienceCard = ({ experience, index, dela }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="relative flex-shrink-0 w-80 mx-4" data-aos="fade-down" data-aos-duration={dela}>
            {/* Timeline dot */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div
                    className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${experience.current ? "bg-green-500 ring-4 ring-green-200" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                ></div>
            </div>

            {/* Experience card */}
            <div
                className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${experience.current ? "ring-2 ring-green-500 ring-opacity-50" : ""
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Current badge */}
                {experience.current && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Current
                    </div>
                )}

                {/* Company and role */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.role}</h3>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        {experience.company}
                    </div>
                </div>

                {/* Duration and location */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                            {experience.startDate} - {experience.endDate}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{experience.location}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{experience.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                        <span
                            key={skillIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard