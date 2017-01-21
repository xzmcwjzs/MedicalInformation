using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Comm_ResidentFile_Followup_Family_DiseaseMap : EntityTypeConfiguration<Comm_ResidentFile_Followup_Family_Disease>
    {
        public Comm_ResidentFile_Followup_Family_DiseaseMap()
        {
            this.HasKey(t=>t.id);
            this.Property(t => t.id).IsRequired().HasMaxLength(50);
            this.Property(t => t.resident_file_id).HasMaxLength(50);
            this.Property(t => t.family_id).HasMaxLength(50);
            this.Property(t => t.resident_id).HasMaxLength(50);
            this.Property(t => t.community_code).HasMaxLength(50);
            this.Property(t => t.worker_user_name).HasMaxLength(50);
            this.Property(t => t.relationship_host).HasMaxLength(50);
            this.Property(t => t.family_disease_type).HasMaxLength(50);
            this.Property(t => t.family_disease_other).HasMaxLength(50);
            this.Property(t => t.family_disease_other_ICD).HasMaxLength(50); 

            Property(t => t.id).HasColumnName("id");
            Property(t => t.resident_file_id).HasColumnName("resident_file_id");
            Property(t => t.family_id).HasColumnName("family_id");
            Property(t => t.resident_id).HasColumnName("resident_id");
            Property(t => t.community_code).HasColumnName("community_code");
            Property(t => t.create_time).HasColumnName("create_time");
            Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            Property(t => t.relationship_host).HasColumnName("relationship_host");
            Property(t => t.family_disease_type).HasColumnName("family_disease_type");
            Property(t => t.family_disease_other).HasColumnName("family_disease_other");
            Property(t => t.family_disease_other_ICD).HasColumnName("family_disease_other_ICD");
            ToTable("Comm_ResidentFile_Followup_Family_Disease");
             
        }
    }
}
