# JobSuit – Software Requirements Specification (SRS)

**Project Name:** JobSuit  
**Document Version:** 1.0  
**Date:** 25 November 2026  
**Project Type:** Full-Stack Web Application

---

# 1. Introduction

## 1.1 Purpose

JobSuit is a web-based job compatibility analysis and CV improvement platform designed to help job seekers evaluate how well their qualifications align with specific job opportunities.

Users can upload their existing CVs, maintain professional profiles, and provide job opportunities through screenshots, URLs, or manual entry.

The system analyses job requirements against the user's skills, education, work experience, and projects. It identifies matching qualifications, partially matching qualifications, and requirements for which no supporting evidence is available.

JobSuit also provides recommendations to improve the presentation of existing qualifications in a CV without fabricating skills, experience, or achievements.

## 1.2 Project Objectives

- Allow users to upload and analyse existing CVs.
- Extract relevant professional information from uploaded CVs.
- Allow users to maintain an editable professional profile.
- Accept job opportunities through screenshots, URLs, and manual entry.
- Analyse job descriptions and identify relevant requirements.
- Compare job requirements against user qualifications.
- Calculate an explainable job compatibility score.
- Identify skill gaps and missing evidence.
- Recommend truthful CV improvements.
- Allow users to customise CVs for specific job opportunities.
- Provide basic job application tracking.

## 1.3 Intended Users

The primary users are:

- University students seeking internships.
- Fresh graduates entering the job market.
- Professionals looking for new employment opportunities.
- Job seekers interested in improving their CVs.

---

# 2. Project Scope

## 2.1 Included Features

1. User registration and authentication.
2. CV upload and text extraction.
3. Professional profile management.
4. Job opportunity input through screenshots.
5. Job opportunity input through URLs.
6. Manual job description entry.
7. Job requirement extraction and review.
8. Job compatibility analysis.
9. Skill gap analysis.
10. CV improvement recommendations.
11. Job-specific CV customisation.
12. Job application tracking.
13. Dashboard and progress overview.

## 2.2 Excluded Features – Initial Release

- Automatic job collection from external job portals.
- Automatic job applications.
- Direct LinkedIn account integration.
- Predicting whether an employer will select a candidate.
- Fabricating or automatically inventing qualifications.
- Native Android and iOS applications.
- Mandatory paid AI services.

External job websites may restrict automated access. Therefore, URL processing will depend on whether the relevant job information is publicly accessible. Screenshot uploads and manual entry will remain alternative input methods.

---

# 3. System Overview

JobSuit will provide three main workflows.

## 3.1 CV Analysis Workflow

1. User uploads a PDF or DOCX CV.
2. System extracts available text.
3. System identifies skills, education, work experience, and projects.
4. User reviews extracted information.
5. User corrects or confirms the information.
6. Confirmed information is stored in the professional profile.

## 3.2 Job Opportunity Input Workflow

Users can provide a job opportunity using one of three methods.

### Method A – Screenshot or Image Upload

1. User uploads a screenshot or image of a job advertisement.
2. System extracts readable text using OCR.
3. System identifies the job title, company, responsibilities, qualifications, and required skills where available.
4. User reviews and corrects extracted information.
5. User confirms and saves the job opportunity.

### Method B – Job Posting URL

1. User pastes a job posting URL.
2. System validates the URL.
3. System attempts to retrieve publicly accessible job information.
4. System extracts relevant job details where access is permitted and technically possible.
5. User reviews and confirms the extracted information.

If the website blocks access, requires authentication, or does not provide readable information, the system asks the user to upload a screenshot or enter the details manually.

### Method C – Manual Entry

1. User selects manual entry.
2. User enters the job title and company.
3. User enters job responsibilities.
4. User enters required and preferred qualifications.
5. User enters required skills and experience.
6. User saves the opportunity.

## 3.3 Job Compatibility Analysis Workflow

1. User selects a saved job opportunity.
2. System retrieves the user's confirmed professional profile.
3. System compares the profile against job requirements.
4. System identifies matching and partially matching qualifications.
5. System identifies requirements without supporting evidence.
6. System calculates the compatibility score.
7. System displays explanations and recommendations.

---

# 4. Functional Requirements

## 4.1 User Management

| ID | Requirement |
|---|---|
| FR-001 | The system shall allow users to register using their name, email, and password. |
| FR-002 | The system shall authenticate registered users. |
| FR-003 | The system shall allow users to log out. |
| FR-004 | The system shall allow users to view and update their account information. |
| FR-005 | The system shall allow users to change their passwords. |
| FR-006 | The system shall allow users to delete their accounts and associated personal data. |

## 4.2 CV Management and Professional Profile

| ID | Requirement |
|---|---|
| FR-007 | The system shall allow users to upload PDF and DOCX CV files. |
| FR-008 | The system shall extract readable text from uploaded CVs. |
| FR-009 | The system shall identify potential skills, education, work experience, and projects. |
| FR-010 | The system shall allow users to review and correct extracted information before confirming it. |
| FR-011 | The system shall allow users to manually add professional information. |
| FR-012 | The system shall allow users to edit and delete professional information. |
| FR-013 | The system shall maintain a master professional profile containing user-confirmed information. |
| FR-014 | The system should support multiple CV versions. |

## 4.3 Job Opportunity Management

| ID | Requirement |
|---|---|
| FR-015 | The system shall allow users to create job opportunities manually. |
| FR-016 | The system shall allow users to enter job titles and company names. |
| FR-017 | The system shall allow users to enter job descriptions and responsibilities. |
| FR-018 | The system shall allow users to enter required and preferred qualifications. |
| FR-019 | The system shall allow users to specify required skills and experience. |
| FR-020 | The system shall allow users to save the original job posting URL. |
| FR-021 | The system shall allow users to edit and delete saved job opportunities. |
| FR-022 | The system should support job categories such as internships, full-time, part-time, and contract positions. |
| FR-023 | The system should support job locations and work arrangements such as remote, hybrid, and onsite. |

## 4.4 Screenshot and Image-Based Job Input

| ID | Requirement |
|---|---|
| FR-024 | The system shall allow users to upload job advertisement screenshots or images. |
| FR-025 | The system shall validate uploaded image formats. |
| FR-026 | The system shall extract readable text from uploaded images using OCR. |
| FR-027 | The system shall identify potential job details and requirements from extracted text. |
| FR-028 | The system shall allow users to review and correct extracted job information. |
| FR-029 | The system shall save confirmed job information as a job opportunity. |

## 4.5 URL-Based Job Input

| ID | Requirement |
|---|---|
| FR-030 | The system shall allow users to submit job posting URLs. |
| FR-031 | The system shall validate submitted URLs. |
| FR-032 | The system shall attempt to retrieve publicly accessible job information. |
| FR-033 | The system shall extract relevant job details when information is accessible. |
| FR-034 | The system shall inform users when job information cannot be retrieved. |
| FR-035 | The system shall allow users to complete unavailable information through manual entry or screenshot upload. |

## 4.6 Job Matching and Compatibility Analysis

| ID | Requirement |
|---|---|
| FR-036 | The system shall compare a user's confirmed professional profile with a selected job opportunity. |
| FR-037 | The system shall identify matching skills. |
| FR-038 | The system shall identify partially matching skills. |
| FR-039 | The system shall identify requirements without supporting evidence in the profile. |
| FR-040 | The system shall compare educational qualifications. |
| FR-041 | The system shall compare relevant work experience. |
| FR-042 | The system shall evaluate relevant academic and professional projects. |
| FR-043 | The system shall calculate an overall compatibility score. |
| FR-044 | The system shall display explanations and supporting evidence for matching results. |
| FR-045 | The system shall display individual results for relevant job requirements. |

## 4.7 CV Improvement Recommendations

| ID | Requirement |
|---|---|
| FR-046 | The system shall identify relevant existing qualifications that are not sufficiently highlighted in the CV. |
| FR-047 | The system shall recommend relevant existing skills and experience to highlight. |
| FR-048 | The system shall suggest improvements to descriptions of existing projects and work experience. |
| FR-049 | The system shall identify job requirements without supporting evidence. |
| FR-050 | The system shall distinguish existing, partially supported, and unverified qualifications. |
| FR-051 | The system shall allow users to accept or reject individual recommendations. |
| FR-052 | The system should generate job-specific CV versions using user-approved information. |
| FR-053 | The system should allow users to preview and download customised CVs. |

## 4.8 Application Tracking

| ID | Requirement |
|---|---|
| FR-054 | The system shall allow users to record job applications. |
| FR-055 | The system shall allow users to update application statuses. |
| FR-056 | The system shall support statuses including Applied, Under Review, Shortlisted, Assessment, Interview, Selected, Rejected, and Withdrawn. |
| FR-057 | The system should allow users to record interview dates and times. |
| FR-058 | The system should allow users to record interview notes. |
| FR-059 | The system should allow users to record application deadlines. |
| FR-060 | The system should display upcoming interviews and application deadlines. |

## 4.9 Dashboard

| ID | Requirement |
|---|---|
| FR-061 | The system shall display the user's saved job opportunities. |
| FR-062 | The system shall display the user's submitted applications. |
| FR-063 | The system shall display application status statistics. |
| FR-064 | The system should display upcoming interviews and deadlines. |
| FR-065 | The system should display job compatibility scores. |
| FR-066 | The system should provide an overview of application progress. |

---

# 5. Job Compatibility Analysis Design

## 5.1 Matching Categories

The initial matching engine will use a rule-based approach.

The system will compare four main areas:

| Category | Initial Weight |
|---|---:|
| Skills | 40% |
| Education | 20% |
| Work Experience | 20% |
| Projects | 20% |
| Total | 100% |

These weights are initial design assumptions and may be adjusted after testing.

## 5.2 Compatibility Formula

Let:

- K = Skills matching score
- E = Education matching score
- W = Work experience matching score
- P = Projects matching score

The initial formula will be:

**Compatibility Score = (0.40 × K) + (0.20 × E) + (0.20 × W) + (0.20 × P)**

Each category score will be calculated on a scale of 0–100.

## 5.3 Matching Results

The system will classify requirements into four categories:

- **Matched:** Clear supporting evidence exists in the user's profile.
- **Partially Matched:** Related evidence exists, but the requirement is not fully demonstrated.
- **Not Evidenced:** No supporting information was found in the profile.
- **Needs Verification:** Available information is ambiguous and requires user confirmation.

The system must not treat related technical skills as identical. For example, knowing Java does not automatically establish experience with Spring Boot.

A missing item in a CV must not automatically be interpreted as a lack of ability.

The compatibility score represents documented alignment with a particular job, not the probability of being hired.

---

# 6. Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-001 | User passwords shall be securely hashed. |
| NFR-002 | Protected resources shall require authentication. |
| NFR-003 | Users shall only access their own private records. |
| NFR-004 | Normal system operations should respond within three seconds under expected test conditions. |
| NFR-005 | The interface shall be understandable and user-friendly. |
| NFR-006 | The application shall support desktop, tablet, and mobile browsers. |
| NFR-007 | The system shall handle invalid inputs without corrupting stored data. |
| NFR-008 | The application shall use modular and maintainable code. |
| NFR-009 | The application shall support modern web browsers. |
| NFR-010 | Uploaded CVs and personal information shall be protected. |
| NFR-011 | Uploaded files shall be validated for format and size. |
| NFR-012 | Database relationships and data integrity shall be maintained. |
| NFR-013 | Matching results shall provide understandable explanations. |
| NFR-014 | The interface should support keyboard navigation and accessibility labels. |
| NFR-015 | URL processing shall validate external URLs and protect against unsafe server-side requests. |

---

# 7. Business Rules

| ID | Business Rule |
|---|---|
| BR-001 | Each registered user shall have a separate professional profile. |
| BR-002 | Authentication shall be required to access personal records. |
| BR-003 | Only supported file formats shall be accepted. |
| BR-004 | Extracted CV information shall be reviewed before being treated as confirmed profile information. |
| BR-005 | Job matching shall use the selected job opportunity and confirmed professional profile. |
| BR-006 | Compatibility scores shall use the defined matching criteria and weights. |
| BR-007 | Missing CV information shall not automatically indicate a lack of ability. |
| BR-008 | The system shall not invent skills, qualifications, employment history, or achievements. |
| BR-009 | CV recommendations shall be based on user-provided or user-confirmed information. |
| BR-010 | Users shall approve information before it is included in a customised CV. |
| BR-011 | A saved job opportunity and a submitted application shall be treated as separate records. |
| BR-012 | Original job posting URLs shall be retained where provided. |
| BR-013 | Users shall review extracted job information before saving it as confirmed information. |
| BR-014 | External URL retrieval shall respect technical access restrictions and applicable website policies. |

---

# 8. Use Cases

| Use Case ID | Use Case |
|---|---|
| UC-001 | Register Account |
| UC-002 | Login |
| UC-003 | Manage Professional Profile |
| UC-004 | Upload CV |
| UC-005 | Review Extracted CV Information |
| UC-006 | Add Professional Information Manually |
| UC-007 | Add Job Opportunity Manually |
| UC-008 | Upload Job Screenshot |
| UC-009 | Import Job Information Using URL |
| UC-010 | Analyse Job Compatibility |
| UC-011 | View Skill Gaps |
| UC-012 | Receive CV Improvement Recommendations |
| UC-013 | Customise CV |
| UC-014 | Download Customised CV |
| UC-015 | Track Job Application |
| UC-016 | Manage Interview Details |
| UC-017 | View Dashboard |

---

# 9. Initial Data Entities

The initial conceptual data model will contain the following entities:

1. User
2. UserProfile
3. CVDocument
4. Skill
5. Education
6. WorkExperience
7. Project
8. JobOpportunity
9. JobRequirement
10. MatchingAnalysis
11. MatchResult
12. CVRecommendation
13. CVVersion
14. Application
15. Interview

The attributes, primary keys, foreign keys, and relationships will be defined during database design.

---

# 10. Technical Constraints and Assumptions

- The application will initially be developed as a web application.
- React.js will be used for the frontend.
- Java Spring Boot will be used for the backend.
- PostgreSQL will be used as the relational database.
- REST APIs will connect the frontend and backend.
- Spring Security and JWT will be used for authentication.
- Rule-based matching will be implemented before advanced AI features.
- PDF and DOCX CV files will be supported.
- OCR will be required for extracting text from job screenshots.
- CV and job information extracted by the system must be reviewed by users.
- URL processing may fail for websites that restrict automated access.
- Users are responsible for providing accurate professional information.

---

# 11. Future Enhancements

Potential future improvements include:

- AI-assisted job description interpretation.
- Advanced semantic skill matching.
- AI-assisted CV improvement recommendations.
- OCR support for scanned CV documents.
- Cover letter generation.
- Interview preparation assistance.
- Application deadline reminders.
- Authorised integrations with external job platforms.
- Advanced career analytics.

---

# 12. Development Phases

## Version 1.0 – Core MVP

- User registration and authentication.
- CV upload and text extraction.
- Professional profile management.
- Screenshot-based job input.
- Manual job opportunity entry.
- Basic URL-based job information retrieval.
- Rule-based compatibility analysis.
- Skill gap identification.
- Basic CV improvement recommendations.
- Basic application tracking.

## Version 1.1 – Enhanced Platform

- Job-specific CV generation.
- Multiple CV versions.
- Advanced matching explanations.
- Interview management.
- Dashboard analytics.

## Version 2.0 – Intelligent Features

- AI-assisted job description analysis.
- Advanced semantic matching.
- AI-assisted CV recommendations.
- Cover letter generation.
- Interview preparation.

---

# 13. Acceptance Criteria

| ID | Acceptance Criteria |
|---|---|
| AC-001 | A user can register and log in successfully. |
| AC-002 | A user can upload a valid PDF or DOCX CV. |
| AC-003 | Extracted CV information can be reviewed and corrected. |
| AC-004 | A user can maintain a professional profile manually. |
| AC-005 | A user can create a job opportunity manually. |
| AC-006 | A user can upload a job screenshot and review extracted information. |
| AC-007 | A user can submit a job URL and receive extracted information when accessible. |
| AC-008 | The system can compare a confirmed profile with a saved job opportunity. |
| AC-009 | The system displays a compatibility score and individual matching results. |
| AC-010 | Matching results distinguish matched, partially matched, not-evidenced, and needs-verification requirements. |
| AC-011 | CV recommendations use existing user-provided or confirmed information. |
| AC-012 | A user can create and update job application records. |
| AC-013 | A user cannot access another user's private records. |
| AC-014 | A customised CV only contains information approved by the user. |

---

**End of Document**
