class TesterController{



   constructor(){
      // *Starting the text and regex states:
      this._curr_regex = '';
      this._curr_text = '';

      // *Starting the tester section view:
      this._testerView = new TesterView();
   }



   /**
    * Handles the change event on regex input
    * @param  {Event} e The event object
    * @author Guilherme Reginaldo Ruella
    */
   onRegexChange(e){
      let new_val = e.target.value;
      if(new_val !== this._curr_regex){
         this._curr_regex = new_val;
         this._updateResult();
      }
   }



   /**
    * Handles the change event on text input
    * @param  {Event} e The event object
    * @author Guilherme Reginaldo Ruella
    */
   onTextChange(e){
      let new_val = e.target.value;
      if(new_val !== this._curr_text){
         this._curr_text = new_val;
         this._updateResult();
      }
   }



   /**
    * Triggers the update on the tester output view
    * @private
    * @author Guilherme Reginaldo Ruella
    */
   _updateResult(){
      let regex = undefined;

      try{
         // *Checking if there is some regex text:
         if(this._curr_regex){
            // *If there is:
            // *Trying to generate a RegEx with the current regex value:
            regex = new RegExp(this._curr_regex, 'g');
         }
      } catch(err){
         // *If the regex could not be created:
         // TODO trigger the invalidate input
      }

      // *Updating and validating the view:
      this._testerView.update({regex: regex, text: this._curr_text});
   }
}
