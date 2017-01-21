using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Comm_ResidentFile_Followup_SurgeryMap : EntityTypeConfiguration<Comm_ResidentFile_Followup_Surgery>
    {
        public Comm_ResidentFile_Followup_SurgeryMap()
        {
            this.HasKey(t=>t.id);
            this.Property(t => t.id)
             .IsRequired()
             .HasMaxLength(50);
            this.Property(t => t.resident_file_id) 
             .HasMaxLength(50);
            this.Property(t => t.family_id) 
             .HasMaxLength(50);
            this.Property(t => t.resident_id)  
             .HasMaxLength(50);
            this.Property(t => t.community_code) 
             .HasMaxLength(50);
            this.Property(t => t.worker_user_name) 
             .HasMaxLength(50);
            this.Property(t => t.surgery_name) 
             .HasMaxLength(50);
            this.Property(t => t.surgery_name_ICD) 
             .HasMaxLength(50);
            this.Property(t => t.surgery_hospital)
            .HasMaxLength(50);
            this.Property(t => t.surgery_result)
            .HasMaxLength(50);

            Property(t => t.id).HasColumnName("id");
            Property(t => t.resident_file_id).HasColumnName("resident_file_id");
            Property(t => t.family_id).HasColumnName("family_id");
            Property(t => t.resident_id).HasColumnName("resident_id");
            Property(t => t.community_code).HasColumnName("community_code");
            Property(t => t.create_time).HasColumnName("create_time");
            Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            Property(t => t.find_date).HasColumnName("find_date");
            Property(t => t.surgery_name).HasColumnName("surgery_name");
            Property(t => t.surgery_name_ICD).HasColumnName("surgery_name_ICD");
            Property(t => t.surgery_hospital).HasColumnName("surgery_hospital");
            Property(t => t.surgery_result).HasColumnName("surgery_result");
            ToTable("Comm_ResidentFile_Followup_Surgery");
 
        }
    }
}
