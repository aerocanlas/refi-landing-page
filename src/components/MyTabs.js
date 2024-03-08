import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
<Box sx={{ maxWidth: { xs: 420, sm: '100%' }, ml: '10%', mr: '10%', mt: '2%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
  value={value}
  onChange={handleChange}
  variant="scrollable"
  scrollButtons
  allowScrollButtonsMobile
  aria-label="scrollable force tabs example"
>
          <Tab label="History" {...a11yProps(0)} sx={{fontWeight: 'bold', fontSize: '21px'}}/>
          <Tab label="Mission & Vision" {...a11yProps(1)} sx={{fontWeight: 'bold', fontSize: '21px'}}/>
          <Tab label="The Board of Directors" {...a11yProps(2)} sx={{fontWeight: 'bold', fontSize: '21px'}}/>
          <Tab label="Beneficiaries" {...a11yProps(3)} sx={{fontWeight: 'bold', fontSize: '21px'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <>

      <div className='mx-6'>
      <dd className="my-6 text-xl text-gray-500 text-justify">The UST Research and Endowment Foundation, Inc. was established in 1991 to facilitate and manage the donations for the scholarship of both students and faculty of the University of Santo Tomas. Since then, it has received support from Thomasian alumni and industry partners. Over the years, maintaining its good standing with the Securities and Exchange Commission, the Bureau of Internal Revenue, and the Department of Social Welfare and Development has helped the Foundation in its efforts to aid students, faculty, and support staff of UST.

 

<br/>
<br/>In 2017, the Foundation received its certification from the Philippine Council for NGO Certification, as well as the Donee Institution Status from the Bureau of Internal Revenue.</dd>

      </div>

      </>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <>
      <div className='mx-8'>
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 my-10">
            <div className="relative">
                <dt>
                    <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    </div>
                    <p className="font-heading ml-0 text-2xl leading-10 font-bold text-gray-700 text-left">Mission</p>
                </dt>
                <dd className="mt-2 ml-0 text-xl text-gray-500 text-justify">
                The UST Research and Endowment Foundation, as a partner of the University of Santo Tomas, in pursuit of truth, guided by reason and illumined by faith, dedicates itself to support the generation, advancement, and transmission of knowledge and social involvement to form competent and compassionate professionals, committed to the service of the Church, the nation, and the global community.

                </dd>
            </div>
            <div className="relative">
                <dt>
                    <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    </div>
                    <p className="font-heading ml-0 text-2xl leading-10 font-bold text-gray-700 text-left">Vision</p>
                </dt>
                <dd className="mt-2 ml-0 text-xl text-gray-500 text-justify">
                The UST Research and Endowment Foundation envisions to aid the University of Santo Tomas to maintain the University’s centuries-old tradition of excellence as a premier Catholic institution of learning in Asia, committed to the professional and moral formation of its stakeholders for social transformation.
                </dd>
            </div>
            <div className="relative">
                <dt>
                    <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    </div>
                    <p className="font-heading ml-0 text-2xl leading-10 font-bold text-gray-700 text-left">Goal</p>
                </dt>
                <dd className="mt-2 ml-0 text-xl text-gray-500 text-justify">
                The goal of the UST Research and Endowment Foundation, Inc. is to support the University of Santo Tomas community to successfully fulfil its mission “to form competent and compassionate professionals, committed to the service of the Church, the nation, and the global community.”                      </dd>
            </div>
            <div className="relative">
                <dt>
                    <div
                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    </div>
                    <p className="font-heading ml-0 text-2xl leading-10 font-bold text-gray-700 text-left">Objectives</p>
                </dt>
                <dd className="mt-2 ml-0 text-xl text-gray-500 text-justify">
                The UST Research and Endowment Foundation envisions to aid the University of Santo Tomas to maintain the University’s centuries-old tradition of excellence as a premier Catholic institution of learning in Asia, committed to the professional and moral formation of its stakeholders for social transformation.
                </dd>
            </div>

           
        </dl>
        </div>
      </>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      <>

    <div class="mx-10 my-10 lg:gap-xl-12 grid gap-x-6 md:grid-cols-1 xl:grid-cols-4">
      <div class="mb-12">
        <img src="./images/president.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" width={200} alt=""  />
        <p class="mb-2 font-bold">VERY. REV. FR. RICHARD G. ANG, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">President and Chairman of the Board</p>
      </div>

      <div class="mb-12">
        <img src="./images/vp.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" width={200} alt=""  />

        <p class="mb-2 font-bold">REV. FR. ISAIAS D. TIONGCO, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">Vice President</p>
      </div>

      <div class="mb-12">
        <img src="./images/treasurer.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" width={200} alt=""  />
        <p class="mb-2 font-bold">REV. FR. ROBERTO L. LUANZON, JR., OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">
        Treasurer
        </p>
      </div>
      <div class="mb-12">
        <img src="./images/corporate secretary.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" width={200} alt=""  />
        <p class="mb-2 font-bold">REV. FR. LOUIE R. CORONEL, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">Corporate Secretary</p>
      </div>

      <div class="mb-12">
        <img src="./images/director.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" width={200} alt=""  />
        <p class="mb-2 font-bold">REV. FR. MAXIMO P. GATELA, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">
          Director
        </p>
      </div>

      <div class="mb-12">
        <img src="./images/member 1.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" width={200} alt=""  />
        <p class="mb-2 font-bold">REV. FR. RODEL E. ALIGAN, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">Member</p>
      </div>

      <div class="mb-12">
        <img src="./images/member 2.jpg"
          class={`mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20`} width={200} alt=""  />
        <p class="mb-2 font-bold">REV. FR. RODEL S. CANSANCIO, OP</p>
        <p class="text-neutral-500 dark:text-neutral-300">Member</p>
      </div>

      <div class="mb-12">
        <img src="./images/member 3.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" width={200} alt=""  />
        <p class="mb-2 font-bold">PROF. CHERYL R. PERALTA</p>
        <p class="text-neutral-500 dark:text-neutral-300">Member</p>
      </div>

      <div class="mb-12">
        <img src="./images/member 4.jpg"
          class={`mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20`} width={200} alt=""  />
        <p class="mb-2 font-bold">PROF. MARIBEL G. NONATO</p>
        <p class="text-neutral-500 dark:text-neutral-300">
        Member
        </p>
      </div>

      <div class="mb-12">
        <img src="./images/member 5.jpg"
          class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" width={200} alt=""  />
        <p class="mb-2 font-bold">MRS. CLOTILDE N. ARCANGEL</p>
        <p class="text-neutral-500 dark:text-neutral-300">
        Member
        </p>
      </div>

    </div>

      </>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
      <>
      <div className='mx-8'>
      <dd className="mt-2 ml-0 text-xl text-gray-500 text-justify">
      The beneficiaries and/or clients of the programs of the UST Research and Endowment Foundation, Inc. may include but not limited to the following:
                </dd>

<div class='max-w-lg py-5'>
    <ul class="flex flex-col gap-5 text-xl text-gray-500 pl-0">
        <li class="border-b border-black rounded-sm">
        The Faculty Members of the University of Santo Tomas
        </li>
        <li class="border-b border-black rounded-sm">
        Researchers of UST
        </li>
        <li class="border-b border-black rounded-sm">
        Support Staff of UST
        </li>
        <li class="border-b border-black rounded-sm">
        UST Faculties and Colleges
        </li>
        <li class="border-b border-black rounded-sm">
        Poor but Deserving UST Students
        </li>
        <li class="border-b border-black rounded-sm">
        Impoverished Partner/Adopted Communities of UST
        </li>
    </ul>
</div>
</div>
      </>
      </CustomTabPanel>
    </Box>
  );
}