using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Comm_ResidentFile_Followup_DiseaseMap : EntityTypeConfiguration<Comm_ResidentFile_Followup_Disease>
    {
        public Comm_ResidentFile_Followup_DiseaseMap()
        {
            this.HasKey(t => new { t.id }).Property(t => t.id).HasMaxLength(50);
            this.Property(t => t.id)
              .IsRequired();

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
            this.Property(t => t.disease_type)
              .HasMaxLength(50);
            this.Property(t => t.disease_other)
              .HasMaxLength(50);
            this.Property(t => t.disease_other_ICD)
              .HasMaxLength(50);
            this.Property(t => t.tumor_type)
              .HasMaxLength(50);

            Property(t => t.id).HasColumnName("id");
            Property(t => t.resident_file_id).HasColumnName("resident_file_id");
            Property(t => t.family_id).HasColumnName("family_id");
            Property(t => t.resident_id).HasColumnName("resident_id");
            Property(t => t.community_code).HasColumnName("community_code");
            Property(t => t.create_time).HasColumnName("create_time");
            Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            Property(t => t.find_date).HasColumnName("find_date");
            Property(t => t.disease_type).HasColumnName("disease_type");
            Property(t => t.disease_other).HasColumnName("disease_other");
            Property(t => t.disease_other_ICD).HasColumnName("disease_other_ICD");
            Property(t => t.tumor_type).HasColumnName("tumor_type");
            ToTable("Comm_ResidentFile_Followup_Disease");

        }
    }
}
