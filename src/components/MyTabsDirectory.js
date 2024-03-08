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
          <Tab label="Professorial Chair" {...a11yProps(0)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
          <Tab label="Research Grant" {...a11yProps(1)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
          <Tab label="Scholarship Grant" {...a11yProps(2)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
          <Tab label="Community Dev't Funds" {...a11yProps(3)} sx={{width: '280px', fontWeight: 'bold', fontSize: '18px'}}/>
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>A. FACULTY OF ARTS & LETTERS
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>FR. VALENTIN MARIN, OP PROFESSORIAL CHAIR IN MASS COMMUNICATION
</li>
          <li>TEODORO VALENCIA PROFESSORIAL CHAIR IN JOURNALISM
</li>
          <li>METROBANK PROFESSORIAL CHAIR IN ECONOMICS
</li>
          <li>PCIB PROFESSORIAL CHAIR IN LEGAL MANAGEMENT
</li>
          <li>JAKA FOUNDATION PROFESSORIAL CHAIR IN LITERATURE & JOURNALISM
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
          <Typography sx={{fontWeight: 'bold'}}>B. COLLEGE OF COMMERCE AND BUSINESS ADMINISTRATION
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          <li>DR. EMILIO YAP PROFESSORIAL CHAIR IN BUSINESS INFORMATION & COMMUNICATION TECHNOLOGY
</li>
          <li>SGV PROFESSORIAL CHAIR IN INFORMATION SYSTEMS MANAGEMENT
</li>
          <li>LARRY LIM GIORDANO PC IN PRE-COMMERCE
</li>
          <li>LUIS ABLAZA JR. DISTINGUISHED PROFESSORIAL CHAIR IN ENTREPRENEURSHIP
</li>
          <li>SECURITY BANK CHAIR FOR COLLEGE OF COMMERCE & BUSINESS ADMINISTRATION
</li>
          <li>CARLOS SALINAS DISTINGUISHED PROFESSORIAL CHAIR IN BUSINESS ADMINISTRATION - STRATEGIC BUSINESS DEV’T.
</li>
          <li>JOSEPHINE TY - CHUA DISTINGUISHED CHAIR IN BUSINESS ADMINISTRATION - BUSINESS ECONOMICS
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
          <Typography sx={{fontWeight: 'bold'}}>C. FACULTY OF ENGINEERING
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>FR. ROQUE RUAÑO, OP PROFESSORIAL CHAIR IN ENGINEERING
</li>
          <li>DEAN FRANCISCO REYES PROFESSORIAL CHAIR IN ENGINEERING
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
          <Typography sx={{fontWeight: 'bold'}}>D. FACULTY OF MEDICINE & SURGERY
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>DR. ANTONIO GABRIEL PROFESSORIAL CHAIR IN MEDICINE
</li>
          <li>CIBA-GEIGY (PHILS) INC PROFESSORIAL CHAIR IN DERMATOLOGY
</li>
          <li>UST MEDICINE CLASS 1976 PROFESSORIAL CHAIR IN MEDICAL SCIENCES
</li>
          <li>DR. EMILIO ESPINOSA PROFESSORIAL CHAIR IN PUBLIC HEALTH
</li>
          <li>UST MEDICINE CLASS 1963 PROFESSORIAL CHAIR IN BASIC SCIENCES
</li>
          <li>NESTLE (PHILS) PROFESSORIAL CHAIR IN INFANT NUTRITION
</li>
          <li>DR. MARIANO ALIMURUNG PROFESSORIAL CHAIR IN MEDICAL EDUCATION
</li>
          <li>DR. ERNESTO-MEDINA CUE PROFESSORIAL CHAIR IN CLINICAL PATHOLOGY
</li>
          <li>DR. MANUEL NAVARRO PROFESSORIAL CHAIR IN NUTRITION
</li>
          <li>DR. SERVANDO ARELLANO PROFESSORIAL CHAIR IN PEDIATRICS (OB-GYNE)
</li>
          <li>DR. ENDMUNDO REYES PROFESSORIAL CHAIR IN OTORHINOLARYNGOLOGY
</li>
          <li>HERMOGENES A. SANTOS PROFESSORIAL CHAIR IN MEDICINE
</li>
          <li>DR. FELIX ESTRADA PROFESSORIAL CHAIR IN PRIMARY HEALTH CARE
</li>
          <li>USTMAA TRISTATE CHAPTER
</li>
          <li>(PENN, DELAWARE, NY) PROFESSORIAL CHAIR IN BASIC SCIENCES II
</li>
          <li>DR. ESTELITO MADRID PROFESSORIAL CHAIR IN BIOCHEMISTRY
</li>
          <li>DR. LOURDES ANDAYA PROFESSORIAL CHAIR IN NEUROLOGY
</li>
          <li>USTMAA TRISTATE CHAPTER (PENN, DELAWARE, NY)
</li>
          <li>PROFESSORIAL CHAIR IN BASIC SCIENCES I
</li>
          <li>DR. JOSE & ESTELA EVANGELISTA PROFESSORIAL CHAIR IN CARDIOLOGY
</li>
          <li>DR. HONORIO RONQUILLO & DR. IBESITA RONQUILLO PROFESSORIAL CHAIR IN PHYSIOLOGY
</li>
          <li>DR. CARMEN SALGADO-ORA PROFESSORIAL CHAIR IN ENDOCRINOLOGY
</li>
          <li>USTMAA MICHIGAN PROFESSORIAL CHAIR IN MEDICINE
</li>
          <li>DR. JOSE P, COCJIN PROFESSORIAL CHAIR IN BASIC SCIENCES
</li>
          <li>DRS. ROMEO & ISABEL PEREZ PROFESSORIAL CHAIR IN OB-GYNE
</li>
          <li>DR. BASILIO BAUTISTA RESEARCH ENDOWMENT IN MEDICAL SCIENCES
</li>
          <li>DR. CELSO & AMOR CARANDANG PROFESSORIAL CHAIR IN ONCOLOGIC SURGERY
</li>
          <li>UST MEDICINE CLASS 1967 PROFESSORIAL CHAIR IN MEDICAL SCIENCES
</li>
          <li>DR. BASILIO BAUTISTA PROFESSORIAL CHAIR IN PLASTIC SURGERY
</li>
          <li>GUAM MEMORIAL HEALTH PLAN PROFESSORIAL CHAIR IN COMMUNITY MEDICINE (PRIMARY HEALTH CARE)
</li>
          <li>DR. ERNESTO ESPALDON PROFESSOR OF PLASTIC & RECONSTRUCTIVE SURGERY AND LETICIA VIRATA ESPALDON SOCIAL JUSTICE FUND
</li>
          <li>UST MEDICINE CLASS 1973 PROFESSORIAL CHAIR IN BASIC SCIENCES
</li>
          <li>DRS. MANNY & ZENAIDA VILLAFANIA PROFESSORIAL CHAIR IN BASIC SCIENCES
</li>
          <li>DR. DIONISIO RIVERA PROFESSORIAL CHAIR IN UROLOGY
</li>
          <li>UNILAB BAYANIHAN PROFESSORIAL CHAIR IN INFECTIOUS DISEASES
</li>
          <li>DR. JESUS JAVIER TAN PROFESSORIAL CHAIR IN ALLERGOLOGY
</li>
          <li>DR. JESUS JAVIER TAN PROFESSORIAL CHAIR IN ORIENTAL MEDICINE
</li>
          <li>ALBERTO LARDIZABAL PROFESSORIAL CHAIR IN PULMONOLOGY
</li>
          <li>IRENEO & ROSENDA PALMA PROFESSORIAL CHAIR IN SURGERY</li>
          <li>DR. TARCILA LAPERAL-MENDOZA PROFESSORIAL CHAIR IN INFECTIOUS DERMATOLOGY
</li>
          <li>DR. LOURDES ACLAN-BALLECER PROFESSORIAL CHAIR IN DEAFNESS RESEARCH
</li>
          <li>DEAN GILBERTO GAMEZ PROFESSORIAL CHAIR IN NEUROLOGY & PSYCHIATRY
</li>
          <li>DR. LEOPOLDO PARDO PROFESSORIAL CHAIR IN BASIC SCIENCE & APOCA PROFESSORIAL CHAIR IN OPTHALMOLOGY
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
          <Typography sx={{fontWeight: 'bold'}}>E. GRADUATE SCHOOL
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>DR. JOSE LUGAY PROFESSORIAL CHAIR IN CHEMISTRY
</li>
          <li>DR. CONCEPCION BLAYLOCK PROFESSORIAL CHAIR
</li>
          <li>ALBERTUS MAGNUS PROFESSORIAL CHAIR IN SCIENCE & MATHEMATICS
</li>
          <li>ST. THOMAS AQUINAS PROFESSORIAL CHAIR IN HUMANITIES
</li>
          <li>FR. CIRIACO PEDROSA, OP. PROFESSORIAL CHAIR IN MATH & PHYSICS
</li>
          <li>FR. FELIX OSES, OP PROFESSORIAL CHAIR IN CHEMISTRY
</li>
          <li>DR. ANDREW VAN MELSEN PROFESSORIAL CHAIR IN PHILISOPHY OF SCIENCE
</li>
          <li>PROFESSORSHIP IN CONSTITUTIONAL DEMOCRACY
</li>
          <li>LORD TAKAYAMA PROFESSORIAL CHAIR IN PHILIPPINES-JAPANESE STUDIES
</li>
          <li>ANTHONY C. AGUIRRE PROFESSORIAL CHAIR IN HISTORY
</li>
          <li>JP LAUREL FOUNDATION PROFESSORIAL CHAIR IN ECONOMICS
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
          <Typography sx={{fontWeight: 'bold'}}>F. FACULTY OF CIVIL LAW
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>PRES. DIOSDADO & DR. EVANGELINE MACAPAGAL PROFESSORIAL CHAIR IN DEMOCRACY

</li>
          <li>BENITO LEGARDA TUAZON PROFESSORIAL CHAIR IN CONSTITUTIONAL LAW

</li>          
          <li>JUAN DE LEON TRUST FUND FOR INDIGENT PATIENTS OF STUH-CD
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
          <Typography sx={{fontWeight: 'bold'}}>G. CONSERVATORY OF MUSIC
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>FR. FRANCISCO CABENAS, OP. PROFESSORIAL CHAIR IN MUSIC
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
          <Typography sx={{fontWeight: 'bold'}}>H. FACULTY OF PHARMACY
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>MARIANO QUE AND ESTELITA DE JESUS QUE
</li>
          <li>PROFESSORIAL CHAIR IN PHARMACY
</li>
          <li>DEAN NORMA LERMA PROFESSORIAL CHAIR IN PHARMACY

</li>
          <li>FR. MAXIMILLANO REBOLLO PROFESSORIAL CHAIR IN PHARMACY
</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel9-content"
          id="panel9-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>I. PHYSICAL THERAPY
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>K.P. YAO FOUNDATION PROFESSORIAL CHAIR IN PT
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
          <Typography sx={{fontWeight: 'bold'}}>J. COLLEGE OF SCIENCE
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>CAROLINA GARCIA PROFESSORIAL CHAIR IN ENGLISH LITERATURE
</li>
          <li>DR. JACK R. CANNON PROF, LECTURE & RESEARCH FUNDS IN NATURAL PRODUCTS CHEMISTRY
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
          <Typography sx={{fontWeight: 'bold'}}>K. ECCLESIASTICAL FACULTIES
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>GERARDO ROCHA UST-CHILE PROFESSORIAL CHAIR IN ECCLESIASTICAL STUDIES & BIOETHICS
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
          <li>FR. AURELIO VALBUENA, OP. PROFESSORIAL CHAIR IN BIO-ETHICS
</li>
          <li>UST CENTER FOR HISTORICO-CULTURAL RESEARCH
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
          <Typography sx={{fontWeight: 'bold'}}>M. SPECIAL FUNDS
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>FR. ANTONIO GONZALES, OP. PROFESSORIAL CHAIR IN EDUCATIONAL TEACHING AND TESTING STRATEGIES
</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <>
      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>A. ENGINEERING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>ENGR. AGUSTIN GOSINGCO RESEARCH CHAIR IN ENGINEERING</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>B. COMMERCE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>SMC ECONOMIC RESEARCH CHAIR I</li>
          <li>SMC ECONOMIC RESEARCH CHAIR II</li>
          <li>ROMEO CO RESEARCH CHAIR IN ACCOUNTING</li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>C. FACULTY OF MEDICINE & SURGERY

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>PCIB RESEARCH CHAIR</li>
          <li>FR. JUAN LABRADOR, OP. RESEARCH CHAIR IN MEDICINE
</li>
          <li>THE MEDICAL RESEARCH PROJECT OF THE PHILIPPINE MEDICAL CENTER, INC.
</li>
          <li>DR. ROSA GUEVARRA RESEARCH CHAIR IN MEDICINE
</li>
          <li>ZAMORA-MASCUNANA RESEARCH CHAIR IN MEDICINE
</li>
          <li>DR. & MRS. SATURNINO ABESAMIS &
</li>
          <li>UST MEDICINE CLASS 1933 RESEARCH CHAIR IN MEDICINE
</li>
          <li>MARIANO & RAYMUNDA YATCO RESEARCH CHAIR IN MEDICINE
</li>
          <li>BPI RESEARCH CHAIR IN MEDICINE
</li>
          <li>FR. ANTONIO GONZALES, OP. RESEARCH CHAIR IN MEDICINE
</li>
          <li>ABBOTT LABORATORY (PHILS) RESEARCH CHAIR IN COMMUNITY PEDICATRICS
</li>
          <li>DR. WILLIAM BURKE RESEARCH CHAIR IN MEDICINE
</li>
          <li>TIME REALTY CORPORATION RESEARCH CHAIR IN MEDICINE
</li>
          <li>DR. JUANITA ESTRADA RESEARCH CHAIR IN CLINICAL PATHOLOGY
</li>
          <li>DR. ALFREDO LEGASPI RESEARCH CHAIR IN ANAESTHESIOLOGY
</li>
          <li>DR. PEREGRINO GUILLEN RESEARCH CHAIR IN ANAESTHESIOLOGY
</li>
          <li>JUSTICE AMBROSIO GERALDEZ RESEARCH CHAIR IN CLINICAL MEDICINE
</li>
          <li>DR. LEOPOLDO PARDO SR MEMORIAL RESEARCH CHAIR
</li>
          <li>DR. ORLANDO SISON RESEARCH CHAIR IN ANAESTHESIOLOGY
</li>
          <li>H. WONG RESEARCH CHAIR IN IDE
</li>
          <li>RESEARCH FUND OF THE FACULTY OF MEDICINE AND SURGERY
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
          <Typography sx={{fontWeight: 'bold'}}>D. NURSING

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>ST. ELIZABETH OF HUNGARY RESEARCH CHAIR
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
          <Typography sx={{fontWeight: 'bold'}}>B. COMMERCE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>FR. LORENZO RODRIGUEZ OP RESEARCH CHAIR  IN PHARMACY
</li>
          <li>MERCURY DRUG RESEARCH CHAIR IN PHARMACY
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
          <Typography sx={{fontWeight: 'bold'}}>F. PHYSICAL THERAPY
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>HEALTHFOCUS RESEARCH CHAIR IN PT

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
          <Typography sx={{fontWeight: 'bold'}}>G. COLLEGE OF SCIENCE
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>DEAN CARMEN KANAPI RESEARCH IN ENVIRONMENTAL STUDIES TRUST FUND

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
          <Typography sx={{fontWeight: 'bold'}}>H. RECTOR’S OFFICE
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>UST CENTER FOR HISTORICO-CULTURAL RESEARCH
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel9-content"
          id="panel9-header"
        >
          <Typography sx={{fontWeight: 'bold'}}>I. SPECIAL FUNDS
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>FR. ANGEL DE BLAS, OP. CHAIR IN RESEARCH ADMINISTRATION
</li>
          <li>FLORES FAMILY RESEARCH DRS. QUIRINO & FELIPA RESEARCH FUND
</li>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
      </>
      </CustomTabPanel>
    
      <CustomTabPanel value={value} index={2}>
      <>
      <div>
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
          <li>EUGENIO JUAN REGALADO GONZALES SCH FUND
</li>
          <li>ARCH. RODRIGUEZ & SIMBULAN
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
          <Typography sx={{fontWeight: 'bold'}}>B. FACULTY OF ARTS & LETTERS

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>OSCAR PICAZO SCHOLARSHIP FUND
</li>
          <li>SMC ECONOMIC RESEARCH CHAIR II</li>
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
          <li>ST. MATTHEW SCHOLARSHIP FUND
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
          <li>PURITA F. NERI SCHOLARSHIP FUND
</li>
          <li>VICENTA F. NERI SCHOLARSHIP FUND
</li>
          <li>USTAA WISCONSIN FUND
</li>
          <li>UST TEACHER EDUCATION & CATHOLIC FORMATION
</li>
          <li>PAULINO AND CARIDAD SEVILLA MEMORIAL SCHOLARSHIP FUND
</li>
          <li>DAVID AND JOSEFINA GARDINIER SCHOLARSHIP FUND
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
          <Typography sx={{fontWeight: 'bold'}}>E. COLLEGE OF FINE ARTS & DESIGN
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>ALEXANDER LACSON JR. MEMORIAL FOUNDATION SCHOLARSHIP FUND
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
          <Typography sx={{fontWeight: 'bold'}}>F. GRADUATE SCHOOL


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>ANTHONY C. AGUIRRE MEMORIAL SCHOLARSHIP FUND
</li>
          <li>THE UST VARSITARIAN GRADUATE SCHOLARSHIP PROGRAM FUND
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
          <Typography sx={{fontWeight: 'bold'}}>G. HIGH SCHOOL
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>UST HIGH SCHOOL ALUMNI ASSOCIATION SCHOLARSHIP FUND
</li>
          <li>UST HIGH SCHOOL ALUMNI ALLIANCE FOUNDATION, INC. SCHOLARSHIP FUND
</li>
          <li>HIGH SCHOOL MENESES SCHOLARSHIP FUND
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
          <Typography sx={{fontWeight: 'bold'}}>H. FACULTY OF MEDICINE & SURGERY
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>DR. JESUS JAVIER TAN SCHOLARSHIP FUND</li>
          <li>DR. BIENVENIDO ALORA SCHOLARSHIP FUND FOR MEDICINE</li>
          <li>THE ROYAL PONTIFICAL UST MEDICAL ALUMNI ASSOCIATION IN THE STATE OF NEW YORK SCHOLARSHIP TRUST FUND</li>
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
          <li>ALEJANDRA ATABUG AWARD FOR MOST OUTSTANDING STUDENT
IN MUSIC EDUCATION
</li>
          <li>MERCEDES S. MACARANAS SCHOLARSHIP FUND
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
          <li>NURSING EDUCATIONAL FOUNDATION
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
          <li>ESTELITA DE JESUS QUE SCHOLARSHIP FOUNDATION
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
          <li>UST THESIS GRANT TRUST FUND

</li>
          <li>JIMENEZ-RIEL SCHOLARSHIP FUND

</li>
          <li>PAGCOR SCHOLARSHIP

</li>
          <li>PCSO SCHOLARSHIP FUND

</li>
          <li>ANN HONG WON SCHOLARSHIP FUND

</li>
          <li>DR. ERNESTO MEDINA-CUE ROSARIO MOTA MEDINA CUE & MA. PAZ MOTA SCHOLARSHIP FUND

</li>
          <li>CLAUDIO F. VALLEDOR SCHOLARSHIP FOUNDATION
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
          <Typography sx={{fontWeight: 'bold'}}>M. SPECIAL FUNDS
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>DIOQUINO SCHOLARSHIP FUND
</li>
          <li>USTAA OF ONTARIO, CANADA FUND

</li>
          <li>UST SCHOLARSHIP FUND

</li>
          <li>PCSO SCHOLARSHIP FUND
</li>
          <li>TAN YAN KEE FOUNDATION SCHOLARSHIP TRUST FUND

</li>
          <li>THOMASIAN CHEMISTRY ALUMNI ASSOCIATION SCHOLARSHIP FUND (TCAA)

</li>
          <li>CHEMISTRY PERIODIC TABLE FUND RAISER SCHOLARSHIP

</li>
          <li>UST REFI EDUCATIONAL ASSISTANCE FUND
</li>
          <li>HENRY JACKSON GOOLSBY AND MARIA GONZALES GOOLSBY SCHOLARSHIP FUND
</li>
          <li>JOSE JR. & MARGARITA COJUANGCO SCHOLARSHIP FUND
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
          <Typography sx={{fontWeight: 'bold'}}>N. CENTRAL SEMINARY


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <li>MANUELA L. EVANGELISTA FUND

</li>

          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
      </>
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