import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<Box sx={{ maxWidth: { xs: 380, sm: 1000 }, mt: '2%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
  value={value}
  onChange={handleChange}
  variant="scrollable"
  scrollButtons
  allowScrollButtonsMobile
  aria-label="scrollable force tabs example"
>
          <Tab label="Scholarship Grant" {...a11yProps(0)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
          <Tab label="Research Grant" {...a11yProps(1)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
          <Tab label="Professorial Chair" {...a11yProps(2)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
          <Tab label="Community Dev't-Outreach Grant" {...a11yProps(3)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
          <Tab label="Thesis-Dissertation Grant" {...a11yProps(4)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
          <Tab label="Travel-Study-Training Grant" {...a11yProps(5)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>

        
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Scope
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The policy and guidelines shall apply to all qualified students in the University.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Statement
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          The Office for Grants, Endowments and Partnerships in Higher Education (OGEP) shall ensure that Scholarship Grants are given to qualified applicants.



          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Guidelines
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List >
            <ListItem>1. To be qualified for Scholarship Grants, the applicant must be a bona fide undergraduate or graduate student of any Faculty or College of the University (except Civil Law and Medicine).</ListItem>
            <ListItem>2. The applicant shall comply with these requirements:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a. Letter of Request endorsed either by the Assistant to the Rector for Student Affairs or the Father Rector; and</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b. Copy of previous semestral grades.</ListItem>
<ListItem>3. The scholarship grant is subject to the availability of funds.</ListItem>
<ListItem>4.   The Office for Grants, Endowments and Partnerships in Higher Education shall determine the specifics of the grants (full/partial, 100% tuition fees, and others). Otherwise, they shall be determined by the Father Rector.</ListItem>
<ListItem>5.   Funds shall also be determined in accordance with the stipulations agreed/stated/specified in the memorandum of agreement (MOA) between the donor and the Research and Endowment Foundation, Inc. (REFI).</ListItem>            
          
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Procedures


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ListItem>1.   The student writes a letter of request to the Assistant to the Rector for Student  Affairs for endorsement or the Father Rector for approval.</ListItem>
            <ListItem>2.   The Office for Student Affairs or the Office of the Rector endorses the student’s application for scholarship to the OGEP for possible funding.</ListItem>
            <ListItem>3.   Upon endorsement or approval, the student accomplishes the UST Scholarship Form (Green Form) at the OGEP and processes it at the other offices/departments connected with the enrolment process.</ListItem>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Monitoring
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ListItem>1.   The Office for Grants, Endowments and Partnerships in Higher Education shall regularly update the Office of the Rector on its activities (on awarding scholarship grants).</ListItem>
          <ListItem>2.   The Office for Grants, Endowments and Partnerships in Higher Education shall update the Quality Management Office on the output of its activities (on awarding scholarship grants) for purposes of quality control, quality assurance and quality audit.</ListItem>
          <ListItem>3.   The Executive Assistant for Grants, Endowments and Partnerships in Higher Education shall supervise the updates and the submission of reports.</ListItem>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Dissemination
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This policy shall be communicated to all units upon approval by the Director for Grants, Endowments and Partnerships in Higher Education.
          </Typography>
        </AccordionDetails>
      </Accordion>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="./images/programs/1.png" className="w-92 opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    </div>
  </div> 
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Scope
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The policy and guidelines shall apply to all qualified faculty members in the University.


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Statement
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          The Office for Grants, Endowments and Partnerships in Higher Education (OGEP) shall ensure that Research Chair (RC) Award is granted to qualified applicants.



          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Guidelines
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
            <ListItem>1.   To be qualified for Research Chair Award, the applicant shall meet the following prerequisites:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Must have a credible research track in the field of specialization, and is committed to exercise personal conduct of/supervision in the laboratory work;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b. Preferably a doctoral degree holder or at least a master’s degree holder;</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c. Must be an active member of scientific or professional organizations, local or foreign, in the field of study or research applied for.</ListItem>

            <ListItem>2. The applicant shall comply with these requirements:
</ListItem>

<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Capsule Research Proposal;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Memorandum of Agreement (MOA);</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c.   Progress and Achievement Reports; and
</ListItem>

<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>d.   Summary of financial statement with supporting documents.

</ListItem>


<ListItem>3.   The research project shall be for a minimum of one (1) year to a maximum of three (3) consecutive years, renewable annually.

</ListItem>   

<ListItem>4.   The grantee shall be bound by the following duties:
</ListItem>

<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Undertake quality research in the specific problem as approved;

</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Presentation of research work in an appropriate forum, conference, seminar or congress; and
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c.   Publication of scholarly research paper in any University’s journal.

</ListItem>

<ListItem>5.   Funds shall be released following this schedule:
</ListItem>

<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   1st fund release: 70% of the total grant, upon submission of the capsule research proposal and signing of the MOA.

</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   2nd fund release: 20% of the total grant, upon submission of the progress report and liquidation of funds with supporting documents.
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   2nd fund release: 20% of the total grant, upon submission of the progress report and liquidation of funds with supporting documents.

</ListItem>
          
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Definition of Terms




</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          1.   A Research Chair is a grant awarded to one in recognition of his research track and meritorious research project proposal, in his field of specialization, to advance the frontiers of knowledge in accordance with the mission of the University.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Procedures


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ListItem>1.   The Office for Grants, Endowments and Partnerships in Higher Education shall regularly update the Office of the Rector on its activities (on awarding scholarship grants).</ListItem>
          <ListItem>2.   The OVRAA provides the guidelines for the RC to the Dean and Research Cluster Director (RCD).
</ListItem>
          <ListItem>3.   The Dean makes a formal announcement of available RC to the Faculty.
</ListItem>
<ListItem>4.   The Faculty submits the capsule research proposal to the RCD for recommendation.
</ListItem>
<ListItem>5.   The Dean recommends the screened capsule research proposal to the OVRAA.
</ListItem>
<ListItem>6.   The OVRAA endorses the screened capsule research proposal to the Rector for approval.
</ListItem>
<ListItem>7.   The Rector approves the grants for implementation and endorses the capsule research proposal to the OGEP.
</ListItem>
<ListItem>8.   The OGEP prepares the MOA for signature of the grantee and the Foundation President, witnessed by the Dean, RCD, OVRAA and Director for Grants, Endowments and Partnerships in Higher Education.
</ListItem>
<ListItem>9.   The OGEP releases the fund to the grantee.
</ListItem>


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Monitoring
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ListItem>1.   The Office for Grants, Endowments and Partnerships in Higher Education shall regularly update the Office of the Rector on its activities (on granting research chair award).
</ListItem>
          <ListItem>2.   The Office for Grants, Endowments and Partnerships in Higher Education shall update the Quality Management Office on the output of its activities (on granting research chair award) for purposes of quality control, quality assurance and quality audit.

</ListItem>  
          <ListItem>3.   The Executive Assistant for Grants, Endowments and Partnerships in Higher Education shall supervise the updates and the submission of reports.

</ListItem>            
</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Dissemination
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This policy shall be communicated to all units upon approval by the Director for Grants, Endowments and Partnerships in Higher Education.            
</Typography>
        </AccordionDetails>
      </Accordion>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Scope

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The policy and guidelines shall apply to all qualified faculty members in the University.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Statement
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          The Office for Grants, Endowments and Partnerships in Higher Education (OGEP) shall ensure that Professorial Chair Award is granted to qualified tenured faculty members.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Guidelines

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
            <ListItem>1.   To be qualified for Professorial Chair Award, the applicant shall meet the following prerequisites:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   a.   Must be a tenured full-time faculty member with at least a rank of Associate Professor;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   With a doctoral degree;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c.   With a very satisfactory or very good competence evaluation;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>d.   Have rendered at least five (5) consecutive years of creditable service to the University;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>e.   Have been involved in effective teaching, productive research and creditable extension programs; and

</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>f.   Be specialized in the field of discipline specified in the Chair.

</ListItem>
            <ListItem>2.   The applicant shall submit these two (2) requirements:
</ListItem>

<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Concise and updated curriculum vitae of the applicant; and
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Planned activities as Chairholder, if and when awarded.
</ListItem>

<ListItem>3.   The Chairholder is bound by the following duties:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Participate in training/discipleship program for younger faculty members;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Participate in community extension service;
</ListItem> 
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c.   Public lecture of scholarly paper;
</ListItem> 
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>d.   Publication of delivered Professorial Chair lecture; and
</ListItem> 
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>e.   Submission of semestral report on the activities undertaken in connection with the chair.
</ListItem> 

<ListItem>4.   Honorarium of ninety thousand pesos maximum (PhP 90,000) per annum shall be given to the grantee as a “salary topping,” separate compensation from the teaching/ research load.
</ListItem>
         
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Definition of Terms
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
<List>
<ListItem>1.   A Chair is a term used in educational institutions to denote an office or a position of dignity, peer recognition and prestige.
</ListItem>
<ListItem>2.   A Professorial Chair is awarded to one in recognition of his/her academic excellence and meritorious service in the field of teaching and in research and who has sustained a dynamic scholarly involvement in teaching, research and in community service in accordance with the mission of the University.
</ListItem>
</List>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Procedures
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Awarding of the Professorial Chair (PC):
          <List>
            <ListItem>1.   The OGEP provides a list of available PC to the Office of the Vice-Rector for Academic Affairs (OVRAA).

</ListItem>
            <ListItem>2.   The OVRAA provides the guidelines for the PC to the Dean.

</ListItem>
            <ListItem>3.   The Dean makes a formal announcement of available PC to the Chairman/Faculty.

</ListItem>
            <ListItem>4.   The Chairman/Faculty submits the names of the candidates to the Dean.

</ListItem>
            <ListItem>5.   The Dean recommends the candidate for Chairholder to the OVRAA.

</ListItem>
            <ListItem>6.   The OVRAA endorses the candidate to the Rector.

</ListItem>
            <ListItem>7.   The Rector gives the formal award to the Chairholder through the Dean.

</ListItem>
            <ListItem>8.   The Chairholder returns the signed conforme sheet to the OVRAA.

</ListItem>
            <ListItem>9.   The OVRAA forwards the conforme sheet to OGEP for the implementation.

</ListItem>
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Implementation (Fund Release):

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
            <ListItem>1.   OGEP provides the requirements for fund release to the Chairholder.

</ListItem>
            <ListItem>2.   The Chairholder submits the requirements to the Chairman and Dean for notation.

</ListItem>
            <ListItem>3.   The Dean forwards the required documents to the OVRAA for endorsement.

</ListItem>
            <ListItem>4.   The OVRAA endorses the documents to the OGEP for implementation (fund release).

</ListItem>
            <ListItem>5.   The OGEP releases the fund to the Chairholder.

</ListItem>
          </List>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Monitoring


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
            <ListItem>1.   The Office for Grants, Endowments and Partnerships in Higher Education shall regularly update the Office of the Rector on its activities (on granting professorial chair award).

</ListItem>
            <ListItem>2.   The Office for Grants, Endowments and Partnerships in Higher Education shall update the Quality Management Office on the output of its activities (on granting professorial chair award) for purposes of quality control, quality assurance and quality audit.

</ListItem>
            <ListItem>3.   The Executive Assistant for Grants, Endowments and Partnerships in Higher Education shall supervise the updates and the submission of reports.

</ListItem>
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Dissemination


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This policy shall be communicated to all units upon approval by the Director for Grants, Endowments and Partnerships in Higher Education.


          </Typography>
        </AccordionDetails>
      </Accordion>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
      <div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="./images/programs/6.jpg" className="w-92 opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <img src="./images/programs/7.jpg" className="w-full object-cover object-center  opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>  
</div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Scope
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The policy and guidelines shall apply to all qualified partner communities of the University.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Statement
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          The Office for Grants, Endowments and Partnerships in Higher Education (OGEP) shall ensure that the Community Service/Outreach Grants are made available to qualified communities.


          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Guidelines
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List >
            <ListItem>1.   Community Service/Outreach Grants are available for qualitied partner communities.</ListItem>
            <ListItem>2.   Grants may only be released upon the request of an eligible unit of the University of Santo Tomas (including offices, alumni associations, and departments), subject to availability of funds.</ListItem>
            <ListItem>3. To be qualified for the Community Service/Outreach Grants, a community should meet the following prerequisites:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a. Must have an activity with a unit of the University of Santo Tomas.</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b. Must submit a detailed outline of the activity and the beneficiaries.</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c. Must be endorsed by the head of the involved unit of the University.</ListItem>

<ListItem>4.   The applicant shall comply with the following to avail the grant:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Letters of Request from both the representative of the community and the involved unit of the University;</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Detailed program of the activity;</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c.   Timeline of preparation, execution and post-event assessment of the activity;</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>d.   Line Item Budget;</ListItem>

<ListItem>5.   Documentary requirements shall be submitted to the OGEP three (3) months before the expected implementation of the activity.</ListItem>            
<ListItem>6.   Should the activity proposal be accepted by the UST REFI, the recipient community and the University unit involved are obliged to submit to the OGEP an activity report within two (2) weeks after the implementation of the activity.</ListItem>            
 
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Procedures


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ListItem>1.   The representatives of the community and the involved University unit submit the requirements stated above to the OGEP.
</ListItem>
            <ListItem>2.   The OGEP Director reviews and endorses the request to the UST REFI President.</ListItem>
            <ListItem>3.   The UST REFI President approves the request.</ListItem>
            <ListItem>4.   The OGEP notifies and releases the fund to the grantee.</ListItem>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Monitoring
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ListItem>1.   The Office for Grants, Endowments and Partnerships in Higher Education shall regularly update the Office of the UST REFI President on its activities.</ListItem>
          <ListItem>2.   The OGEP shall update the Quality Management Office on the output of its activities for purposes of quality control, quality assurance and quality audit.</ListItem>
          <ListItem>3.   The Executive Assistant for Grants, Endowments and Partnerships in Higher Education shall supervise the updates and the submission of reports.</ListItem>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Dissemination
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This policy shall be communicated to all units upon approval by the Director for Grants, Endowments and Partnerships in Higher Education.          </Typography>
        </AccordionDetails>
      </Accordion>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
      <div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="./images/programs/2.jpg" className="w-92 opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <img src="./images/programs/3.jpg" className="w-full object-cover object-center  opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>  
</div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Scope

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The policy and guidelines shall apply to all qualified faculty members in the University.
</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Statement
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          The Office for Grants, Endowment and Partnerships in Higher Education (OGEP) shall ensure that Thesis and Dissertation Grants are awarded to qualified applicants.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Guidelines

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
          <ListItem>1.   To be qualified for Thesis and Dissertation Grants, the applicant must be a tenured faculty member enrolled and finishing a masteral or doctoral degree  program in the top universities, or at least those known for their high quality standards as specialized institutions.
</ListItem>
            <ListItem>2.   The applicant shall comply with these requirements:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Letter of Request
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Recommendation of the Dean where he/she is affiliated
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c.   Endorsement of the Office of the Vice Rector for Academic Affairs
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>d.   Certificate of approval of the thesis/dissertation proposal from the Graduate School;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>e.   Time table of research activities; and

</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>f.    Itemized budget layout of estimated expenses (supplies, materials and other related costs)

</ListItem>
<ListItem>3.   Thesis Grant is set a maximum of twenty thousand pesos (PhP 20,000.00) while Dissertation Grant at thirty thousand pesos (PhP 30,000.00).
</ListItem>
            <ListItem>4.   For Thesis Grant, funds are released following this schedule:

</ListItem>

<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   1st fund release: PhP 15,000.00, upon submission of the requirements and signing of the MOA.
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   2nd fund release: PhP 5,000.00, upon submission of a copy of the extended abstract of the master’s thesis and certification of submission of the corrected bound copy of the thesis.
</ListItem>

<ListItem>5.   For Dissertation Grant, funds shall be released following this schedule:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   1st fund release: PhP 25,000.00, upon submission of the requirements and signing of the MOA.

</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   2nd fund release: PhP 5,000.00, upon submission of a copy of the extended abstract of the dissertation and certification of submission of the corrected bound copy of the dissertation.
</ListItem> 

<ListItem>6.   The grantee shall abide by the Memorandum of Agreement (MOA) and all existing rules and regulation of the University governing study grants.
</ListItem>
         
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Definition of Terms
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
<List>
<ListItem>1.   Thesis and Dissertation Grants are available to tenured faculty members to enable them to finish their masters or doctoral degrees.  The grants are to complement the assistance given to faculty members by the Office of Vice Rector  for Academic Affairs.  The grants cover the material and other costs in the conduct of the research, not to exceed the limits set by the Foundation.
</ListItem>
</List>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Procedures
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
            <ListItem>1.   The faculty member submits the requirements to the Dean.

</ListItem>
            <ListItem>2.   The Dean recommends the faculty member’s application for thesis/ dissertation grant to the Office of the Vice Rector for Academic Affairs (OVRAA).
</ListItem>
            <ListItem>3.   The OVRAA endorses the faculty member’s application for thesis/dissertation to OGEP and to the Foundation President for approval.
</ListItem>
            <ListItem>4.   The OGEP prepares the MOA for signature of the grantee and the Foundation President, witnessed by the Dean, RCD, OVRAA and Director for Grants, Endowments and Partnerships in Higher Education.
</ListItem>
            <ListItem>5.   The OGEP releases the fund to the grantee.
</ListItem>

          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6-content"
          id="panel7-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Monitoring


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
            <ListItem>1.   The Office for Grants, Endowments and Partnerships in Higher Education shall regularly update the Office of the Rector on its activities (on awarding thesis and dissertation grants).
</ListItem>
            <ListItem>2.   The Office for Grants, Endowments and Partnerships in Higher Education shall update the Quality Management Office on the output of its activities (on awarding thesis and dissertation grants) for purposes of quality control, quality assurance and quality audit.
</ListItem>
            <ListItem>3.   The Executive Assistant for Grants, Endowments and Partnerships in Higher Education shall supervise the updates and the submission of reports.
</ListItem>
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Dissemination


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This policy shall be communicated to all units upon approval by the Director for Grants, Endowments and Partnerships in Higher Education.
</Typography>
        </AccordionDetails>
      </Accordion>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={5}>
      <div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="./images/programs/4.jpg" className="w-92 opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <img src="./images/programs/5.jpg" className="w-full object-cover object-center  opacity-60" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>  
</div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Scope

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The policy and guidelines shall apply to all qualified faculty members in the University.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Statement
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          The Office for Grants, Endowments and Partnerships in Higher Education (OGEP) shall ensure that Travel/Study/ Training Grants are made available to qualified applicants.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Policy Guidelines

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
          <ListItem>1.   Travel Grants are available for tenured Faculty Members to enable them to represent the University as speaker or paper presenter in International or National Conferences or Symposia related to their field of discipline or to attend training workshops or short courses in their line of specialization.
</ListItem>
<ListItem>2.   Grants may only be made to the same person once in every two years that is two academic years, subject to availability of funds.
</ListItem>
            <ListItem>3.   To be qualified for Travel/Study/ Training Grants, the applicant shall meet the following prerequisites:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Must be a tenured faculty member accepted or invited to international/national conferences or symposia to present a scholarly written paper related to his/her field of discipline, or to attend training/ seminar workshop or short courses in line of his/her specialization.
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Must have at least a satisfactory competence evaluation rating.
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c.   For paper presentation outside Southeast Asia, must be with a doctoral degree and at least an Associate Professor in rank.
</ListItem>

<ListItem>4.   The applicant shall comply with the following to avail the grant:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Letter of Request;

</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Recommendation of the Dean and/or Director of the Research Center of affiliation;

</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>c.   Endorsement of the Office for Research and Innovation (for paper presentations and as plenary speaker);

</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>d.   Letter of Invitation or Acceptance to participate in the conference or to attend the workshop;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>e.   Copy of the talk to be presented if attending as speaker; the Abstract and full Manuscript of accepted paper for presentation in the conference; and
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>f.   Itemized budget layout (total projected expenses and funding source).
</ListItem>

<ListItem>5.   Documentary requirements shall be submitted to the OGEP one (1) month before the expected date of departure to give ample time for its processing. Otherwise, the request for grant would be disapproved.
</ListItem>

<ListItem>6.   The OGEP shall take charge of the booking arrangement.
</ListItem>
            <ListItem>7.   The grantee is obliged to:
</ListItem>

<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Submit to the OGEP a travel report and the original copies of the return air ticket stub and all other official receipts within two (2) weeks after return; and
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Publish the paper presentation in a refereed journal (local/international).
</ListItem>

<ListItem>8.   Per diem living allowance may be granted:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Subject to availability of funds and shall cover only the duration of the conference or a maximum of five (5) days;
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Only when travel is provided with free airfare and/or accommodation
</ListItem> 

<ListItem>9.   Recipients of travel grants shall be guided by the following defrayal of airfare:
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>a.   Travelling as Speaker/Plenary: 100% of total airfare, travel tax and Philippine tax
</ListItem>
<ListItem sx={{width: {xs: 220, sm: 680}, ml: 10}}>b.   Travelling as Paper Presenter: 50% of total airfare, travel tax and Philippine tax
</ListItem> 

<ListItem>10. Travel grant is released directly to the faculty grantee by the OGEP. However, the approval of travel grant request is subject to availability of funds.
</ListItem>
<ListItem>11. Applicants shall reimburse the amount incurred by the OGEP for any cancellation of a processed/finalized travel grant.
</ListItem>
         
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Definition of Terms
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
<List>
<ListItem>Travel Grants, as a rule, cover the partial return economy airfare; registration and accommodation are charged against the Faculty/College’s funds; and other costs such as passport/visa application fees and per diem* allowance are personal counterpart..
</ListItem>
</List>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Procedures
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
            <ListItem>1.   The faculty member submits the requirements to the Dean.
</ListItem>
            <ListItem>2.   At least three (3) weeks before the presentation date, the Dean recommends the faculty member’s application for travel/study/training grant to the Office for Research and Innovation (ORI) for review of paper to be presented.

</ListItem>
            <ListItem>3.   The ORI endorses the faculty member’s application for travel/study/training grant to OGEP and to the Foundation President for approval.

</ListItem>
            <ListItem>4.   The OGEP releases the fund to the grantee.

</ListItem>
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6-content"
          id="panel7-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Monitoring


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <List>
            <ListItem>1.   The Office for Grants, Endowments and Partnerships in Higher Education shall regularly update the Office of the Rector on its activities (on awarding travel/study/training grants).
</ListItem>
            <ListItem>2.   The Office for Grants, Endowments and Partnerships in Higher Education shall update the Quality Management Office on the output of its activities (on awarding travel/study/training grants) for purposes of quality control, quality assurance and quality audit.

</ListItem>
            <ListItem>3.   The Executive Assistant for Grants, Endowments and Partnerships in Higher Education shall supervise the updates and the submission of reports.

</ListItem>
          </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Dissemination


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This policy shall be communicated to all units upon approval by the Director for Grants, Endowments and Partnerships in Higher Education.

</Typography>
        </AccordionDetails>
      </Accordion>

      </CustomTabPanel>

    </Box>
  );
}