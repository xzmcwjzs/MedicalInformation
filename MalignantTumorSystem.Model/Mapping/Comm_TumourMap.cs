using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
   public class Comm_TumourMap:EntityTypeConfiguration<Entities.Comm_Tumour>
    {
       public Comm_TumourMap()
       {
           // Primary Key
           this.HasKey(t => t.id);

           // Properties
           this.Property(t => t.id)
               .IsRequired()
               .HasMaxLength(50);

           this.Property(t => t.tumour_type)
               .HasMaxLength(50);

           this.Property(t => t.is_tell_iller)
               .HasMaxLength(50);

           this.Property(t => t.tumour_class)
               .HasMaxLength(50);

           this.Property(t => t.responsible_physician)
               .HasMaxLength(50);

           this.Property(t => t.pathology_id)
               .HasMaxLength(50);

           this.Property(t => t.tumour_tnm_staging)
               .HasMaxLength(50);

           this.Property(t => t.tumour_clinic_staging)
               .HasMaxLength(50);

           this.Property(t => t.diagnose_dependence)
               .HasMaxLength(50);

           this.Property(t => t.tumour_diagnose_studio)
               .HasMaxLength(50);

           this.Property(t => t.report_doctor)
               .HasMaxLength(50);

           this.Property(t => t.record_department)
               .HasMaxLength(50);

           this.Property(t => t.family_tumour_history)
               .HasMaxLength(50);

           this.Property(t => t.relationship_of_sufferer)
               .HasMaxLength(50);

           this.Property(t => t.family_tumour_type)
               .HasMaxLength(50);

           this.Property(t => t.resident_id)
               .IsRequired()
               .HasMaxLength(50);

           this.Property(t => t.community_code)
               .IsRequired()
               .HasMaxLength(50);

           this.Property(t => t.worker_user_name)
               .IsRequired()
               .HasMaxLength(50);

           this.Property(t => t.resident_name)
               .HasMaxLength(50);

           this.Property(t => t.id_card_number)
               .HasMaxLength(50);

           this.Property(t => t.permanent_home_address)
               .HasMaxLength(70);

           this.Property(t => t.last_cycle_suggestion)
               .HasMaxLength(50);

           // Table & Column Mappings
           this.ToTable("Comm_Tumour");
           this.Property(t => t.id).HasColumnName("id");
           this.Property(t => t.tumour_type).HasColumnName("tumour_type");
           this.Property(t => t.is_tell_iller).HasColumnName("is_tell_iller");
           this.Property(t => t.tumour_class).HasColumnName("tumour_class");
           this.Property(t => t.responsible_physician).HasColumnName("responsible_physician");
           this.Property(t => t.pathology_id).HasColumnName("pathology_id");
           this.Property(t => t.tumour_tnm_staging).HasColumnName("tumour_tnm_staging");
           this.Property(t => t.tumour_clinic_staging).HasColumnName("tumour_clinic_staging");
           this.Property(t => t.first_diagnose_time).HasColumnName("first_diagnose_time");
           this.Property(t => t.sure_diagnose_time).HasColumnName("sure_diagnose_time");
           this.Property(t => t.diagnose_dependence).HasColumnName("diagnose_dependence");
           this.Property(t => t.tumour_diagnose_studio).HasColumnName("tumour_diagnose_studio");
           this.Property(t => t.report_doctor).HasColumnName("report_doctor");
           this.Property(t => t.record_department).HasColumnName("record_department");
           this.Property(t => t.family_tumour_history).HasColumnName("family_tumour_history");
           this.Property(t => t.relationship_of_sufferer).HasColumnName("relationship_of_sufferer");
           this.Property(t => t.family_tumour_type).HasColumnName("family_tumour_type");
           this.Property(t => t.record_time).HasColumnName("record_time");
           this.Property(t => t.create_time).HasColumnName("create_time");
           this.Property(t => t.resident_id).HasColumnName("resident_id");
           this.Property(t => t.community_code).HasColumnName("community_code");
           this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
           this.Property(t => t.resident_name).HasColumnName("resident_name");
           this.Property(t => t.id_card_number).HasColumnName("id_card_number");
           this.Property(t => t.birth_date).HasColumnName("birth_date");
           this.Property(t => t.permanent_home_address).HasColumnName("permanent_home_address");
           this.Property(t => t.last_followup_date).HasColumnName("last_followup_date");
           this.Property(t => t.last_cycle_suggestion).HasColumnName("last_cycle_suggestion");
       }
    }
}
