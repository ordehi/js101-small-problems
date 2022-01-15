const readline = require('readline-sync');

const display = (message) => {
  console.log(message);
};

const madlibs = () => {
  display('Enter a noun: ');
  let noun = readline.prompt();

  display('Enter a verb: ');
  let verb = readline.prompt();

  display('Enter an adjective: ');
  let adjective = readline.prompt();

  display('Enter an adverb: ');
  let adverb = readline.prompt();

  let story = `One day, the ${adjective} ${noun} will ${verb} ${adverb}. But as it stands now, the ${noun} isn't ${adjective} enough to ${verb} ${adverb}.`;

  display(story);
};

madlibs();
