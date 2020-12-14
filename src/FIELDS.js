export default [
  {
    type: 'text', // input type
    name: 'fullName', // Form input name
    label: 'Full Name', // Label for Input
    placeholder: 'John Doe', // Placeholder
    pattern: '[A-Za-z\\s]{1,}',
    required: true
  },
  {
    type: 'date', // input type
    name: 'dob', // Form input name
    label: 'Date of Birth', // Label for Input
    required: true
  },
  {
    type: 'month', // input type
    name: 'dobMonth', // Form input name
    label: 'Month of Date of Birth', // Label for Input
  },
  {
    type: 'week', // input type
    name: 'dobWeek', // Form input name
    label: 'Week of Date of Birth', // Label for Input
  },
  {
    type: 'color', // input type
    name: 'themeColor', // Form input name
    label: 'Theme Color', // Label for Input
  },
  {
    type: 'search', // input type
    name: 'defaultQuery', // Form input name
    label: 'Default Search Text', // Label for Input
  },
  {
    type: 'time', // input type
    name: 'wakeupTime', // Form input name
    label: 'Wakeup Time', // Label for Input
    required: true
  },
  {
    type: 'range', // input type
    name: 'workHours', // Form input name
    label: 'Working Hours', // Label for Input
    min: 0,
    max: 24,
    step: 1
  },
  {
    type: 'number', // input type
    name: 'workCapacity', // Form input name
    label: 'Weekly Work Capacity', // Label for Input
    required: true,
    min: 10,
    max: 8*7, // 9 hrs per day for 7 days of week
    step: 4 // half day steps
  },
  {
    type: 'file', // input type
    name: 'profilePicture', // Form input name
    label: 'Profile Picture', // Label for Input
    required: true
  },
  {
    type: 'radio',
    name: 'gender',
    label: 'Gender',
    required: true,
    options: [
      {
        label: 'Male',
        value: 'M'
      }, {
        label: 'Female',
        value: 'F'
      }, {
        label: 'Other',
        value: 'O'
      }, {
        label: 'I\'d rather not specify',
        value: '-'
      },
    ]
  },
  {
    type: 'checkbox',
    name: 'foodChoices',
    label: 'Food Choices',
    options: [
      {
        label: 'Vegan',
        value: 'V+'
      }, {
        label: 'Vegetarian',
        value: 'V'
      }, {
        label: 'Non Vegetarian',
        value: 'N'
      }, {
        label: 'I\'d rather not specify',
        value: '-'
      },
    ],
    validations: [
      (value, name, allFormValues, form) => ([
        Boolean(allFormValues[name]),
        `Please select atleast one of ${name}`
      ]),
      (value, name, allFormValues, form) => ([
        ['V+', 'V', 'N', '-'].includes(value),
        `Please select only from the provided choices for ${name}`
      ])
    ]
  },
  {
    type: 'select',
    name: 'primaryLanguage',
    label: 'Primary Language',
    required: true,
    options: [
      {
        label: 'English (US)',
        value: 'en_US'
      }, {
        label: 'English (UK)',
        value: 'en_UK'
      }, {
        label: 'Deutsch',
        value: 'de_DE'
      }, {
        label: 'French',
        value: 'fr_FR'
      }
    ]
  },
  {
    type: 'email',
    name: 'email',
    label: 'Your Email',
    required: true
  },
  {
    type: 'tel',
    name: 'phoneNumber',
    label: 'Your Phone Number',
    required: false,
    pattern: '[+0-9]{8,12}'
  },
  {
    type: 'url',
    name: 'homepage',
    label: 'Your Website',
    required: false
  },
  {
    type: 'password',
    name: 'password',
    label: 'Your Password',
    required: true
  },
  {
    type: 'password',
    name: 'confirmPassword',
    label: 'Confirm Password',
    required: true
  },
  {
    type: 'checkbox',
    name: 'terms',
    label: '',
    required: true,
    options: [{
      value: 'yes',
      label: 'Terms and Conditions'
    }]
  }
]