export var adminLteConf = {
  skin: 'blue', 
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {label: 'Start', route: '/', iconClasses: 'fa fa-th'},
    {label: 'Parent', iconClasses: 'fa fa-files-o', children: [
      {label: 'Children', route: 'parent/children'},
      {label: 'Parent 2', children: [
        {label: 'Children 2', route: 'parent/parent2/children2'}
      ]}
    ]}
  ]
};

