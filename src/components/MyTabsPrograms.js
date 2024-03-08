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
          <Tab label="Thesis-Dissertation Grant" {...a11yProps(3)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
          <Tab label="Travel-Study-Training Grant" {...a11yProps(3)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>

        
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
          <List >
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

      <CustomTabPanel value={value} index={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>A. COLLEGE OF ARCHITECTURE

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>JORGE RAMOS ASSISTANCE FUND

</li>
          <li>DR. HUBERT WONG TRUST FUND FOR CAFA FACULTY DEVELOPMENT

</li>
          <li>YOLANDA DAVID REYES CAFA FACULTY DEVELOPMENT FUND
</li>
          <li>PAZ JOVEN DAVID CAFA ASSISTANCE FUND
</li>
          <li>CAFA RESEARCH & EXHIBIT ASSISTANCE FUND
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>B. FACULTY OF CIVIL LAW
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          <li>LEGAL AID CLINIC FUND
</li>
          <li>H. WONG LEGAL AID CLINIC FUND
</li>
          <li>LEGAL AID TRUST FUND
</li>



          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>C. COLLEGE OF COMMERCE AND BUSINESS ADMINISTRATION
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>COMMERCE ACADEMIC OFFICALS DEVELOPMENT FUND
</li>
          <li>SMALL BUSINESS DEVELOPMENT & TRAINING CENTER
</li>
          <li>UST CPA REVIEW FUND
</li>
          <li>H. WONG LECTURE SERIES IN BA
</li>
          <li>VICENCIA YUCHENGCO TRUST FUND
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>D. COLLEGE OF EDUCATION
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>EDUCATION HIGH SCHOOL TRUST FUND
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>E. FACULTY OF ENGINEERING
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>UST ENGINEERING TRUST FUND
</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>F. FACULTY OF MEDICINE AND SURGERY
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>STRENGTHENING THE DEPARTMENT OF LABORATORY TRUST FUND (PCHRD)
</li>
          <li>CIBA-GEIGY (PHILS) TRUST FUND FOR THE RHEUMATOLOGY & IMMUNOLOGY UNIT
</li>          
          <li>JUAN DE LEON TRUST FUND FOR INDIGENT PATIENTS OF STUH-CD
</li>
          <li>DR. ERNESTO MEDINA-CUE TRUST FUND FOR INDIGENT PATIENTS OF STUH-CD (LABORATORY)
</li>          
          <li>LUIS GUERRERO MEMORIAL FUND
</li>
          <li>UST CLINICAL EPIDEMIOLOGY UNIT DEVELOPMENT FUND
</li>          
          <li>DR. BERNARDO BRIONES RESEARCH PROJECT ON TB
</li>
          <li>CLASS 79 RESEARCH PROJECT FUND
</li>          
          <li>MTBEA FUND
</li>
          <li>DR. ERNESTO MERCADER-ESPALDON SCHOLARSHIP TRUST FUND
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>G. GRADUATE SCHOOL
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>ROMEO CO FOUNDATION TF FOR GS
</li>
          <li>UST GRADUATE SCHOOL FOUNDATION
</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>H. HIGH SCHOOL
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>HIGH SCHOOL DEVELOPMENT FUND</li>
          <li>UST HIGH SCHOOL FOUNDATION</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel9-content"
          id="panel9-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>I. CONSERVATORY OF MUSIC
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>UST PERFORMING ARTS TRUST FUND
IN MUSIC EDUCATION
</li>
          <li>JULIO ANQUITA COMPETITION TRUST FUND
</li>

          <li>ERNANI CUENCO COMPETITION TRUST FUND
</li>
          <li>UST SYMPHONY TRUST FUND
</li>
          <li>EUGENIA AGONCILLO COMPETITION TRUST FUND
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel10-content"
          id="panel10-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>J. COLLEGE OF NURSING
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>UST NURSING DEVELOPMENT TRUST FUND
</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel11-content"
          id="panel11-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>K. FACULTY OF PHARMACY
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>UST PHARMACY FOUNDATION
</li>
          <li>USTPMTBBAA, INC. GRANT FOR GRADUATE THESIS/DISSERTATION OF THE ACADEMIC PERSONNEL OF THE FACULTY OF PHARMACY
</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel12-content"
          id="panel12-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>L. RECTOR’S OFFICE
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>UST CENTRAL LIBRARY TRUST FUND
</li>
          <li>UST SPORTS DEVELOPMENT TRUST FUND
</li>
          <li>MEDICAL MISSIONS INC
</li>
          <li>COMPUTER FACULTY DEVELOPMENT ASSISTANCE TRUST FUND
</li>
          <li>UST PROJECT HASIK
</li>
          <li>NICANOR & ARSENIA GUEVARRA FUND
</li>
          <li>LINDA & DEXTER GREY ENDOWMENT FUND
</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel13-content"
          id="panel13-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>M. RESEARCH CENTER

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>ASOMPS VII NATURAL PRODUCTS TRUST FUND
</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel14-content"
          id="panel14-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>N. COLLEGE OF SCIENCE
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>SCIENCE DEVELOPMENT FOUNDATION
</li>
          <li>GO PENG KUAN TRUST FUND
</li>
          <li>JAMES AKIRA OSATO SCIENCE LRU
</li>
          <li>LOURDES C. DELA ROSA MEMORIAL TRUST FUND
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel15-content"
          id="panel15-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>O. ADMINISTRATIVE TRUST FUND
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>ST. MARTIN DE PORRES TF FOR THE DEVELOPMENT OF LEARNING MATERIALS

</li>
          <li>ST. THOMAS AQUINAS TF FOR THE DEVELOPMENT OF LEARNING MATERIALS

</li>
          <li>UST MEDICINE TF FOR CURRICULUM & RESEARCH DEVELOPMENT PROGRAM

</li>
          <li>UST MEDICINE & SURGERY ADMINISTRATIVE TRUST FUND

</li>

          <li>UST MEDICINE SURGICAL-ONCOLOGY BUILDING FUND

</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel16-content"
          id="panel16-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>P. LEARNING RESOURCES UNIT TRUST FUND
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>H. WONG LRU TRUST FUND
</li>
          <li>MEDICAL LRU TRUST FUND
</li>
          <li>UST MEDICINE CLASS 1963 LRU TRUST FUND
</li>
          <li>UST MEDICINE LRU TRUST FUND
</li>

          <li>UST MEDICINE CLASS 1962 LRU FUND
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel17-content"
          id="panel17-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>Q. MEDICAL LIBRARY TRUST FUND
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>DR. CARMEN DANNUG BASSUG MEDICAL LIBRARY TRUST FUND

</li>
          <li>UST MEDICINE CLASS 1967 MEDICAL LIBRARY TRUST FUND

</li>
          <li>DR. MA. THERESA BISONETTE MEDICAL LIBRARY TRUST FUND

</li>
          <li>USTMAA MICHIGAN MEDICAL LIBRARY TRUST FUND

</li>

          <li>DR. HERMINIA DAVID VIJUNGCO PATHWAY TO KNOWLEDGE MEDICAL LIBRARY TRUST FUND

</li>

          <li>ST. COSMAS & ST. DAMIAN MEDICAL LIBRARY TRUST FUND

</li>

          <li>DR. JESUS ALCID MEDICAL LIBRARY FUND

</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel17-content"
          id="panel17-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>R. SPECIAL FUNDS
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>ADMINISTRATIVE & ACADEMIC OFFICIALS DEVELOPMENT FUND
</li>
          <li>ASSISTANT TO THE RECTOR FOR RESEARCH TRUST FUND
</li>
          <li>PLANNING & DEVELOPMENT OFFICE RESEARCH FUND
</li>
          <li>UST MEDICINE TRUST FUND FOR PEDIATRIC LEUKEMIA PATIENTS
</li>

          <li>USTMAA MEDICAL ASSISTANCE TRUST FUND
</li>

          <li>STUH PICU TRUST FUND
</li>

          <li>UST TRUST FUND FOR CALAMITY VICTIMS
</li>

          <li>MEDICAL ALUMNI LIAISON OFFICE
</li>
          <li>INSTRUMENTATION SERVICE CENTER FUND
</li>
          <li>INSTITUTIONAL OUTREACH TRUST FUND
</li>
          <li>LABORATORY MAINTENANCE FUND
</li>
          <li>EDUCATION TECHNOLOGY TRUST FUND
</li>
          <li>UST MUSEUM CULTURAL HERITAGE CONSERVATION TRUST FUND
</li>
          <li>UST MUSEUM TRUST FUND
</li>
          <li>NCIJA
</li>
          <li>PATHOLOGY MUSEUM
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      </CustomTabPanel>

    </Box>
  );
}