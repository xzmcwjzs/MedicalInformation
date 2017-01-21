using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Comm_ResidentFile_Followup_Blood_TransfusionMap : EntityTypeConfiguration<Comm_ResidentFile_Followup_Blood_Transfusion>
    {
        public Comm_ResidentFile_Followup_Blood_TransfusionMap()
        {
            this.HasKey(t=>t.id);
            this.Property(t => t.id).IsRequired().HasMaxLength(50);
            this.Property(t => t.resident_file_id).HasMaxLength(50);
            this.Property(t => t.family_id).HasMaxLength(50);
            this.Property(t => t.resident_id).HasMaxLength(50);
            this.Property(t => t.community_code).HasMaxLength(50);
            this.Property(t => t.worker_user_name).HasMaxLength(50);
            this.Property(t => t.blood_transfusion_reason).HasMaxLength(100);
            this.Property(t => t.blood_amount).HasMaxLength(50);
            this.Property(t => t.blood_result).HasMaxLength(50);

            Property(t => t.id).HasColumnName("id");
            Property(t => t.resident_file_id).HasColumnName("resident_file_id");
            Property(t => t.family_id).HasColumnName("family_id");
            Property(t => t.resident_id).HasColumnName("resident_id");
            Property(t => t.community_code).HasColumnName("community_code");
            Property(t => t.create_time).HasColumnName("create_time");
            Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            Property(t => t.find_date).HasColumnName("find_date");
            Property(t => t.blood_transfusion_reason).HasColumnName("blood_transfusion_reason");
            Property(t => t.blood_amount).HasColumnName("blood_amount");
            Property(t => t.blood_result).HasColumnName("blood_result");
            ToTable("Comm_ResidentFile_Followup_Blood_Transfusion");
             
        }
    }
}
