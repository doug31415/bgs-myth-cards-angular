
(function(){
  'use strict';

  bgsFactModel.$inject = ['$log'];

  function bgsFactModel( $log ){

  // --------------------
  // vars
  // --------------------

      var facts = {
          blue: [

              // too complicated
              [ 'Two workplace retirement plans are designed to be easy to understand and manage – SEP and SIMPLE plans.',
                  'Automated programs, such as Auto Enroll, can help simplify the process by automatically enrolling employees in your 401(k) plan as soon as they are eligible.  It also allows you to help them  start saving and investing early for retirement.',
                  'You don’t have to go it alone. You should talk to your accountant/tax adviser or other business advisers.'],

              // take too much time
              ['There are many resources available, some plans may even be set up efficiently online.',
                  'You’ll find that several retirement plans can be set up 24 hours a day, 7 days a week.',
                  'Some business retirement plans, such as a SEP plan, require very little paperwork to get started. And there’s almost no ongoing paperwork.'],
              // I have plenty of time
              ['When it comes to investing, the sooner you start, the better. So it’s a good idea to put away something now—even if it’s just a small amount.',
                  'Many middle class Americans said 80 is the new 65, and they plan to delay retirement because of money worries. Source: Wells Fargo survey;  Employee Benefit News, Nov  2011',
                  'As a small business owner, you can contribute more dollars into a plan than you could into your IRA account.']
          ],

          green: [
              // selling my business is my retirement plan
              ['Many small business owners may not know what their company is worth. And may not have an exit strategy.',
                  'Changing economic conditions, new market competition and more may make it hard to estimate your business’s worth when you’re ready to retire.',
                  'Many may find it hard to retire from their business completely because it’s hard to predict future cash flow, health care costs and lifestyle needs. Source: "How To Sell A Business For Baby Boomers", PRWeb.com, February 3, 2012'],

              // too expensive
              ['Many 401(k) plans offer streamlined features and bundled services that allow for cost-effective plan administration.',
                  'The potential tax advantages and credits available often outweigh the costs of establishing and maintaining plans.',
                  'Some plan providers may waive or reduce the start-up and customization costs. Be sure to ask when you compare plans.'],

              // i can afford to wait
              ['As a small business owner, you can contribute more dollars into a plan than you could into your IRA account.',
                  'While some experts say that you’ll need 80 to 100% of your pre-retirement income to live the way you want to after you retire, others suggest you may want more to last throughout your retirement. Source:  Wells Fargo survey;  Employee Benefit News, November 2011',
                  'Many middle class Americans said 80 is the new 65, and they plan to delay retirement because of money worries. Source:  Wells Fargo survey;  Employee Benefit News, November 2011']
          ],

          orange: [
              // employees not interested
              ['Do your employees know about the potential tax advantages of a plan? Contributions are tax-deferred. Employees only pay taxes when the money is withdrawn.',
                  'A retirement plan can supplement an employee’s overall compensation package and may help in years where salary increases are difficult.',
                  'Following recent economic downturns, 59% of employers feel an increased sense of responsibility toward their employee’s financial well-being. Source: Bank of America Merrill Lynch Workplace Benefits Report, June 2011'],,

              // have to make contributions every year
              ['Not all retirement plans require mandatory annual contributions.  You may choose a plan that does not include that requirement when you’re reviewing your choices.',
                  'It’s up to you.  Employers often match their employees’ contributions to encourage them to participate.',
                  'Contributions you make are generally tax deductible to the business.'],

              // dont need to
              ['Three out of four (75%) small business owners who currently offer retirement plans claim it is more cost effective to retain employees than it is to replace them. Source: Bank of America Merrill Lynch Workplace Benefits Report: Small Business Spotlight, 2012',
                  '71% of surveyed small business employees who are very satisfied with their benefits feel a strong sense of employer loyalty. Source: Metlife’s 11th Annual  Study of Employee Benefits Trends, 2013',
                  'Why do employers offer plans? 68% of employers  said to attract and 76% said to retain top talent. Source:  Bank of America Merrill Lynch Workplace Benefits Report, June 2011']
          ]
      };


  // --------------------
  // class factory
  // --------------------

  var service = {
      getFacts: getFacts
  };

  return service;

  // --------------------
  // functions
  // --------------------

  function getFacts( type, pid ){
      $log.debug('getting facts for ' + type + ' ' + pid);

      return facts[ type ][ pid ];
  }

}// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'bgsMythCardsApp' )
    .factory( 'bgsFactModel', bgsFactModel );

})();
