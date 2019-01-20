/** Declare all theme views here **/

const views = module.exports = {
	index : {
      ctrl : require('../views/index'),
      data : require('../../data/index')
  }/*,
  someOtherView : {
		ctrl : require('../views/index'), <- View js
		data : require('../../data/index'), <- View data (json)
  }
  */
}