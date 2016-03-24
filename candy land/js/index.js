// Contains the story and paths
var story = {
  intro: {
    prompt: 'You see a candy portal do you go in?',
    options: [{
      name: 'go in',
      path: 'go_in'
    }, {
      name: 'dont go in',
      path: 'dont_go_in'
    }]
  },
  go_in: {
    prompt: 'you see a candy mountain with a castle naext to it.What do you do next?',
    options: [{
      name: 'enter mountain',
      path: 'enter_mountain'
    }, {
      name: 'enter castle',
      path: 'enter_castle'
    }]
  },
  enter_mountain: {
    prompt: 'you see a dragon. what do you do',
    options: [{
      name: 'fight',
      path: 'fight'
    }, {
      name: 'share candy',
      path: 'share_candy'
    }]
  },
  fight: {
    prompt: 'You lose! The dragon ate you',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  share_candy: {
    prompt: 'you won with the power of friendship! Do you want to play again?',
    options: [{
      name: 'Yes',
      path: 'intro'
    }]
    }, 
  enter_castle: {
    prompt: 'you see king candy what do you do!?',
    options: [{
      name: 'steal his candy',
      path: 'steal_his_candy'
    },{
      name: 'move in',
      path: 'move_in'
    
    }]
  },
 move_in: {
    prompt: 'you have won with the power of friendship!',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
    steal_his_candy: {
    prompt: 'you rot in jail. you loose',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  dont_go_in: {
    prompt: 'You walk away but trip into the candy portal and fall in. you arive into candyland and see a bubblegum tree. what do you do?',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  }
}

/**
 * Chosen option is an object with properties {name, path}
 */
function display_scenario(chosen_option) {
  var option_name = chosen_option.name;
  var option_path = chosen_option.path;
  var scenario = story[option_path];
  
  // Clear the #prompt div and the #options div
  $('#prompt').empty();
  $('#options').empty();
  
  // Create a <p> to display what the user has chosen if option_name is not null and append it to the #prompt <div>
  if (option_name) {
    $('<p>').html('You have chosen <b>' + option_name + '</b>').appendTo('#prompt');
  }
  
  // Append the scenario's prompt
  $('<p>').html(scenario.prompt).appendTo('#prompt');
  
  // Append the options into the #options <div>
  // We want to loop through all the options and create buttons for each one. A regular for-loop would not suffice because adding a button is not asynchronous. We will create an asynchronous loop by using recursion
  function add_option_button(index) {
    if (index === scenario.options.length) {
      // Base case
      return;
    }
    
    var option = scenario.options[index];
    
    // Create a <button> for this option and append it to the #options <div>
    $('<button>')
      .html(option.name)
      .click(function(e) {
        // This is an onclick handler function. It decides what to do after the user has clicked on the button.
      
        // First, prevent any default thing that the button is going to do, since we're specifying our own action for the button
        e.preventDefault();
      
        // We'll want to call display_scenario() with this option
        display_scenario(option);
      })
      .appendTo('#options');
    
    // Add the next option button
    add_option_button(index + 1);
  }
  add_option_button(0);
}

// This function waits until the document is ready
$(document).ready(function() {
  // Start the story
  display_scenario({
    name: null,
    path: 'intro'
  });
});