// link to downloadable resume and list of developers proficiencies

import React, { Component } from "react";
import bootstrap from "bootstrap";
import ResumeLink from "../../assets/Alyssa-Petersen-Resume.pdf";
import resumeHeader from "../../assets/resume-header.png";

function Resume() {
  return (
    <React.Fragment>
      <div className="img-fluid mw-75 mx-auto d-flex justify-content-center">
        <img className="img-fluid mw-75 d-block" src={resumeHeader} />
      </div>
      <div className="container mx-auto">
        <div className="row row-cols-1 row-cols-md-2 g-6">
          <div className="col mx-auto p-4">
            <div className="card border-info bg-dark p-3 align-items-center">
              <h3 className="card-title text-center text-info mx">Resume</h3>

              <a className="link-info" href={ResumeLink} download>
                <h5 className="text-white">Download My Resume!</h5>
              </a>

              <h4 className="text-center text-info">QUALIFICATIONS:</h4>
              <p className="text-info text-left">
                More than 5 years experience working as a teacher in a classroom
                setting, including Head of Grades 1 and 2 at a respected
                international school in Hanoi, Vietnam. NC Certified for K-6
                Elementary and ESL Instruction K-12. Currently teaching ESL in a
                title 1 school with the third highest EL population in the CMS
                district.
              </p>

              <h4 className="text-center text-info">EDUCATION EXPERIENCE:</h4>

              <p className="text-info text-left">
                Forest Hill/YMCA Community Outreach- ESL Teacher <br />
                July 2019- Present
                <br />
                Responsible for running, planning, and organizing an ESL
                classroom of 25 adults. Working to make sure that students not
                only learn and understand conventional vocabulary and grammar,
                but also get the tools they need to feel more comfortable in
                their daily surroundings. Motivating students to continue to
                maintain attendance and making class a safe and enjoyable
                learning environment.
                <br />
                <br />
                Hidden Valley Elementary School- English Learner Teacher- 2nd
                Grade <br />
                January 2020- June 2021
                <br />
                Created data driven lessons focused on increasing students
                comprehension and fluency Facilitated small group activities
                emphasizing critical learning Collaborated with classroom
                teachers to support students and created lessons to meet
                individual needs. Established positive relationships with
                students, parents, fellow teachers and school
                administrators/staff Maintained students engagement and grew
                relationships during COVID-19 Digital Learning
                <br />
                <br />
                Forest Hill Day Camp- Assistant Director
                <br />
                Summer 2020 and 2022
                <br />
                <br />
                <br />
                Oaklawn Language Academy- Assistant Teacher
                <br /> Charlotte, NC August 2019- January 2020
                <br />
                Supporting students in both reading and math in Grades 1, 4 and
                5. Performing assessments to monitor student progress and
                produce data. Implementing and monitoring LLI programs with
                small groups.
                <br />
                <br />
                Wellspring International School
                <br /> Hanoi, Vietnam Lead Facilitator of Grade 1, Lead
                Facilitator of Grade 2 <br /> July 2018- June 2019 Lead
                Facilitator of Grade 1 <br /> July 2017- June 2018 Grade 1
                Teacher, English. Math and Science
                <br /> July 2016- June 2017
                <br />
                <br />
                Teaching Responsibilities: Designing and implementing lesson
                plans for classrooms of 20-25 students. Fostering confidence and
                independence within first time English learners. Developing a
                curiosity for learning through individual, group, and pair work
                through hands on activities and creative thinking tasks.
                Nurturing an environment that encourages not only academic
                achievement, but social and emotional development. Ensuring
                students showed regular improvement though continuous summative
                and formative assessments. Communicating with students and
                parents of many different cultures and backgrounds in an
                effective and productive way.
                <br />
                <br />
                Lead Facilitator Responsibilities: Creating and managing
                learning content for 12 first grade and 9 second grade classes
                with different English language ability levels and developmental
                needs. Observing teachers and providing effective feedback.
                Preparing and administering regular subject exams across
                multiple grade levels to ensure effective student assessment and
                growth.
                <br />
                <br />
                <br />
                <strong>EDUCATION</strong>
                <br />
                <br />
                Geneseo State University
                <br />
                Bachelor of Arts in Psychology
                <br />
                Bachelor of Arts in History
                <br />
                <br />
                University of West Florida
                <br />
                TeacherReady Certification Program <br />
                <br />
                <strong>PROFESSIONAL AWARDS AND RECOGNITIONS</strong>
                <br />
                Outstanding Teacher Award: 2018- 2019
                <br />
                Excellent Teacher Award: Semester 1: 2017- 2018
                <br />
                Excellent Teacher Award: School Year 2016- 2017
                <br />
                Enthusiastic Teacher Award: 2017- 2018
                <br />
                <br />
                <strong>HEALTH CERTIFICATIONS</strong>
                <br />
                CPR and First Aid Certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Resume;
