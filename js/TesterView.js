class TesterView{



   constructor(){
      // *Defining the highlight marks information:
      this._mark_start_str = `<span class="highlighted">`;
      this._mark_end_str = `</span>`;
      this._mark_start_length = this._mark_start_str.length;
      this._mark_end_length = this._mark_end_str.length;

      // *Defining the matches list items information:
      this._matches_start_str = `<li>`;
      this._matches_end_str = `</li>`;

      // *Getting the DOM elements:
      this._regex_input = $('#tester-regex-input');
      this._highlight_output = $('#tester-highlight-output');
      this._matches_output = $('#tester-matches-output');
   }



   /**
    * Update the status of the tester section
    * @param  {RegExp} regex  The regex to be applyed
    * @param  {string} text   The text to be tested
    * @author Guilherme Reginaldo Ruella
    */
   update({ regex, text = '' }){

      // *Checking if the regex could be set:
      if(!regex){
         // *If it couldn't:
         // *Setting a neutral regex:
         regex = new RegExp('^');
         // *Checking if the input hasn't the invalid class:
         if(!this._regex_input.className.includes('invalid')){
            // *If it hasn't:
            // *Adding the class on the input:
            this._regex_input.className += 'invalid';
         }
      } else{
         // *If it could:
         // *Checking if the input has the invalid class already:
         if(this._regex_input.className.includes('invalid')){
            // *If it has:
            // *Removing it from the input:
            this._regex_input.className = this._regex_input.className.replace(/invalid/g, '');
         }
      }

      // *Initializing the last highlight applyed index on text:
      let last_verified_index = 0;
      // *Generating the matches array:
      let matches = text.match(regex) || [''];

      // *Initializing the HTML content of highlight text and matches list:
      let highlighting_content = text;
      let matches_list_content = '';

      // *Getting each matched text:
      for(let match of matches){
         // *Adding one more matches list item:
         matches_list_content += match ? `${this._matches_start_str}${match}${this._matches_end_str}` : '';

         // *Finding the match inside the text, starting after the last verified index:
         let index = highlighting_content.indexOf(match, last_verified_index);

         // *Inserting the starting highlight mark on text:
         highlighting_content = this._insertText(highlighting_content, this._mark_start_str, index);
         // *Inserting the ending highlight mark on text:
         highlighting_content = this._insertText(highlighting_content, this._mark_end_str, index + this._mark_start_length + match.length);

         // *Setting the last verified index as the last position of the last ending highlight mark inserted:
         last_verified_index = index + this._mark_start_length + match.length + this._mark_end_length;
      }

      // *Aplying the html:
      this._highlight_output.innerHTML = highlighting_content;
      this._matches_output.innerHTML = matches_list_content;
   }



   /**
    * Inserts a text inside a string at the specified position
    * @private
    * @param  {string} original The original text
    * @param  {string} new_text The text to be inserted
    * @param  {number} at       The position to insert the given text
    * @return {string}          The new string with the inserted text
    * @author Guilherme Reginaldo Ruella
    */
   _insertText(original, new_text, at){
      // *Returning the complete text:
      return [original.slice(0, at), new_text, original.slice(at)].join('');
   }
}
