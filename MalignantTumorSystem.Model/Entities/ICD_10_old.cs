using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{ 
      public partial class ICD_10_old
    { 
        /// <summary>
        /// 默认构造函数（需要初始化属性的在此处理）
        /// </summary>
	    public ICD_10_old()
		{
 		}

        #region Property Members
        
        public string code { get; set; }

        public string name { get; set; }

        public string help_code { get; set; }


        #endregion

    }
}
