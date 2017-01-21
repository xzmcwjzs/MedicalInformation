using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Comm_ResidentFileMap : EntityTypeConfiguration<Comm_ResidentFile>
    {
        public Comm_ResidentFileMap()
        {
            // Primary Key
            this.HasKey(t =>t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.family_id)
                .HasMaxLength(50);

            this.Property(t => t.resident_id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.password)
                .HasMaxLength(50);

            this.Property(t => t.resident_committee_code)
                .HasMaxLength(50);

            this.Property(t => t.resident_detail_address)
                .HasMaxLength(50);

            this.Property(t => t.resident_name)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.father_name)
                .HasMaxLength(50);

            this.Property(t => t.mother_name)
                .HasMaxLength(50);

            this.Property(t => t.father_id)
                .HasMaxLength(50);

            this.Property(t => t.mother_id)
                .HasMaxLength(50);

            this.Property(t => t.resident_host_relation)
                .HasMaxLength(50);

            this.Property(t => t.individual_phone)
                .HasMaxLength(50);

            this.Property(t => t.work_unit)
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.sex)
                .HasMaxLength(50);

            this.Property(t => t.age)
                .HasMaxLength(50);

            this.Property(t => t.nation)
                .HasMaxLength(50);

            this.Property(t => t.height)
                .HasMaxLength(50);

            this.Property(t => t.weight)
                .HasMaxLength(50);

            this.Property(t => t.weight_exponent)
                .HasMaxLength(50);

            this.Property(t => t.marital_status)
                .HasMaxLength(50);

            this.Property(t => t.education_qualification)
                .HasMaxLength(50);

            this.Property(t => t.occupation_situation)
                .HasMaxLength(50);

            this.Property(t => t.irritability_history)
                .HasMaxLength(50);

            this.Property(t => t.blood_group)
                .HasMaxLength(50);

            this.Property(t => t.cost_method_payment)
                .HasMaxLength(50);

            this.Property(t => t.residence_character)
                .HasMaxLength(50);

            this.Property(t => t.agency_baoka_number)
                .HasMaxLength(50);

            this.Property(t => t.moving_out_y_n)
                .HasMaxLength(50);

            this.Property(t => t.death_y_n)
                .HasMaxLength(50);

            this.Property(t => t.resident_host_id)
                .HasMaxLength(50);

            this.Property(t => t.resident_host_name)
                .HasMaxLength(50);

            this.Property(t => t.family_phone)
                .HasMaxLength(50);

            this.Property(t => t.email)
                .HasMaxLength(50);

            this.Property(t => t.nationality_code)
                .HasMaxLength(50);

            this.Property(t => t.nationality_name)
                .HasMaxLength(50);

            this.Property(t => t.post_code)
                .HasMaxLength(50);

            this.Property(t => t.resident_address_type)
                .HasMaxLength(50);

            this.Property(t => t.rh_blood_group)
                .HasMaxLength(50);

            this.Property(t => t.abo_blood_group)
                .HasMaxLength(50);

            this.Property(t => t.disability_status)
                .HasMaxLength(50);

            this.Property(t => t.id_card_organization)
                .HasMaxLength(50);

            this.Property(t => t.community_code)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.worker_user_name)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.chronic_manage_no)
                .HasMaxLength(50);

            this.Property(t => t.permanent_home_address)
                .HasMaxLength(70);

            this.Property(t => t.residence_address)
                .HasMaxLength(70);

            this.Property(t => t.workplace_address)
                .HasMaxLength(70);

            this.Property(t => t.birth_address)
                .HasMaxLength(70);

            this.Property(t => t.other_address)
                .HasMaxLength(70);

            this.Property(t => t.other_address_type)
                .HasMaxLength(70);

            this.Property(t => t.community_subordinate_address_id)
                .HasMaxLength(70);

            this.Property(t => t.personal_fixed_line_telephone)
                .HasMaxLength(50);

            this.Property(t => t.contact_name)
                .HasMaxLength(50);

            this.Property(t => t.contact_phone)
                .HasMaxLength(50);

            this.Property(t => t.contact_my_relationship)
                .HasMaxLength(50);

            this.Property(t => t.drug_allergy_type)
                .HasMaxLength(50);

            this.Property(t => t.drug_allergy_other)
                .HasMaxLength(50);

            this.Property(t => t.disability_type)
                .HasMaxLength(50);

            this.Property(t => t.disability_other)
                .HasMaxLength(50);

            this.Property(t => t.disability_certificate_number)
                .HasMaxLength(50);

            this.Property(t => t.file_number)
                .HasMaxLength(50);

            this.Property(t => t.file_cover_number)
                .HasMaxLength(50);

            this.Property(t => t.permanent_address_type)
                .HasMaxLength(50);

            this.Property(t => t.smoking)
                .HasMaxLength(50);

            this.Property(t => t.drinking)
                .HasMaxLength(50);

            this.Property(t => t.disease)
                .HasMaxLength(50);

            this.Property(t => t.surgery)
                .HasMaxLength(50);

            this.Property(t => t.trauma)
                .HasMaxLength(50);

            this.Property(t => t.blood_transfusion)
                .HasMaxLength(50);

            this.Property(t => t.family_disease)
                .HasMaxLength(50);

            this.Property(t => t.genetic_disease)
                .HasMaxLength(50);

            this.Property(t => t.hypertension_flag)
                .HasMaxLength(50);

            this.Property(t => t.diabetes_flag)
                .HasMaxLength(50);

            this.Property(t => t.chd_flag)
                .HasMaxLength(50);

            this.Property(t => t.tumour_flag)
                .HasMaxLength(50);

            this.Property(t => t.schiz_flag)
                .HasMaxLength(50);

            this.Property(t => t.adult_exam_count)
                .HasMaxLength(50);

            this.Property(t => t.father_id_card_numb)
                .HasMaxLength(50);

            this.Property(t => t.mother_id_card_numb)
                .HasMaxLength(50);

            this.Property(t => t.permanent_home_commitcode)
                .HasMaxLength(50);

            this.Property(t => t.residence_commitcode)
                .HasMaxLength(50);

            this.Property(t => t.doctor)
                .HasMaxLength(50);

            this.Property(t => t.father_phone)
                .HasMaxLength(50);

            this.Property(t => t.mother_phone)
                .HasMaxLength(50);

            this.Property(t => t.work_type)
                .HasMaxLength(50);

            this.Property(t => t.fill_identity_type)
                .HasMaxLength(50);

            this.Property(t => t.birth_commitcode)
                .HasMaxLength(50);

            this.Property(t => t.worker_time_everyweek)
                .HasMaxLength(50);

            this.Property(t => t.father_email)
                .HasMaxLength(50);

            this.Property(t => t.mother_email)
                .HasMaxLength(50);

            this.Property(t => t.chronic_disease_type)
                .HasMaxLength(50);

            this.Property(t => t.birth_community_code)
                .HasMaxLength(50);

            this.Property(t => t.present_community_code)
                .HasMaxLength(50);

            this.Property(t => t.fill_community_code)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Comm_ResidentFile");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.family_id).HasColumnName("family_id");
            this.Property(t => t.resident_id).HasColumnName("resident_id");
            this.Property(t => t.password).HasColumnName("password");
            this.Property(t => t.resident_committee_code).HasColumnName("resident_committee_code");
            this.Property(t => t.resident_detail_address).HasColumnName("resident_detail_address");
            this.Property(t => t.resident_name).HasColumnName("resident_name");
            this.Property(t => t.father_name).HasColumnName("father_name");
            this.Property(t => t.mother_name).HasColumnName("mother_name");
            this.Property(t => t.father_id).HasColumnName("father_id");
            this.Property(t => t.mother_id).HasColumnName("mother_id");
            this.Property(t => t.resident_host_relation).HasColumnName("resident_host_relation");
            this.Property(t => t.individual_phone).HasColumnName("individual_phone");
            this.Property(t => t.work_unit).HasColumnName("work_unit");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
            this.Property(t => t.sex).HasColumnName("sex");
            this.Property(t => t.age).HasColumnName("age");
            this.Property(t => t.nation).HasColumnName("nation");
            this.Property(t => t.height).HasColumnName("height");
            this.Property(t => t.weight).HasColumnName("weight");
            this.Property(t => t.weight_exponent).HasColumnName("weight_exponent");
            this.Property(t => t.marital_status).HasColumnName("marital_status");
            this.Property(t => t.education_qualification).HasColumnName("education_qualification");
            this.Property(t => t.occupation_situation).HasColumnName("occupation_situation");
            this.Property(t => t.irritability_history).HasColumnName("irritability_history");
            this.Property(t => t.blood_group).HasColumnName("blood_group");
            this.Property(t => t.cost_method_payment).HasColumnName("cost_method_payment");
            this.Property(t => t.residence_character).HasColumnName("residence_character");
            this.Property(t => t.agency_baoka_number).HasColumnName("agency_baoka_number");
            this.Property(t => t.moving_out_y_n).HasColumnName("moving_out_y_n");
            this.Property(t => t.moving_out_date).HasColumnName("moving_out_date");
            this.Property(t => t.death_y_n).HasColumnName("death_y_n");
            this.Property(t => t.death_date).HasColumnName("death_date");
            this.Property(t => t.resident_host_id).HasColumnName("resident_host_id");
            this.Property(t => t.resident_host_name).HasColumnName("resident_host_name");
            this.Property(t => t.family_phone).HasColumnName("family_phone");
            this.Property(t => t.email).HasColumnName("email");
            this.Property(t => t.nationality_code).HasColumnName("nationality_code");
            this.Property(t => t.nationality_name).HasColumnName("nationality_name");
            this.Property(t => t.post_code).HasColumnName("post_code");
            this.Property(t => t.start_work_date).HasColumnName("start_work_date");
            this.Property(t => t.resident_address_type).HasColumnName("resident_address_type");
            this.Property(t => t.rh_blood_group).HasColumnName("rh_blood_group");
            this.Property(t => t.abo_blood_group).HasColumnName("abo_blood_group");
            this.Property(t => t.disability_status).HasColumnName("disability_status");
            this.Property(t => t.id_card_active_date).HasColumnName("id_card_active_date");
            this.Property(t => t.id_card_unactive_date).HasColumnName("id_card_unactive_date");
            this.Property(t => t.id_card_organization).HasColumnName("id_card_organization");
            this.Property(t => t.create_time).HasColumnName("create_time");
            this.Property(t => t.community_code).HasColumnName("community_code");
            this.Property(t => t.worker_user_name).HasColumnName("worker_user_name");
            this.Property(t => t.chronic_manage_no).HasColumnName("chronic_manage_no");
            this.Property(t => t.permanent_home_address).HasColumnName("permanent_home_address");
            this.Property(t => t.residence_address).HasColumnName("residence_address");
            this.Property(t => t.workplace_address).HasColumnName("workplace_address");
            this.Property(t => t.birth_address).HasColumnName("birth_address");
            this.Property(t => t.other_address).HasColumnName("other_address");
            this.Property(t => t.other_address_type).HasColumnName("other_address_type");
            this.Property(t => t.community_subordinate_address_id).HasColumnName("community_subordinate_address_id");
            this.Property(t => t.personal_fixed_line_telephone).HasColumnName("personal_fixed_line_telephone");
            this.Property(t => t.contact_name).HasColumnName("contact_name");
            this.Property(t => t.contact_phone).HasColumnName("contact_phone");
            this.Property(t => t.contact_my_relationship).HasColumnName("contact_my_relationship");
            this.Property(t => t.drug_allergy_type).HasColumnName("drug_allergy_type");
            this.Property(t => t.drug_allergy_other).HasColumnName("drug_allergy_other");
            this.Property(t => t.disability_type).HasColumnName("disability_type");
            this.Property(t => t.disability_other).HasColumnName("disability_other");
            this.Property(t => t.disability_certificate_number).HasColumnName("disability_certificate_number");
            this.Property(t => t.file_number).HasColumnName("file_number");
            this.Property(t => t.file_cover_number).HasColumnName("file_cover_number");
            this.Property(t => t.permanent_address_type).HasColumnName("permanent_address_type");
            this.Property(t => t.smoking).HasColumnName("smoking");
            this.Property(t => t.drinking).HasColumnName("drinking");
            this.Property(t => t.disease).HasColumnName("disease");
            this.Property(t => t.surgery).HasColumnName("surgery");
            this.Property(t => t.trauma).HasColumnName("trauma");
            this.Property(t => t.blood_transfusion).HasColumnName("blood_transfusion");
            this.Property(t => t.family_disease).HasColumnName("family_disease");
            this.Property(t => t.genetic_disease).HasColumnName("genetic_disease");
            this.Property(t => t.hypertension_flag).HasColumnName("hypertension_flag");
            this.Property(t => t.diabetes_flag).HasColumnName("diabetes_flag");
            this.Property(t => t.chd_flag).HasColumnName("chd_flag");
            this.Property(t => t.tumour_flag).HasColumnName("tumour_flag");
            this.Property(t => t.schiz_flag).HasColumnName("schiz_flag");
            this.Property(t => t.adult_exam_count).HasColumnName("adult_exam_count");
            this.Property(t => t.father_id_card_numb).HasColumnName("father_id_card_numb");
            this.Property(t => t.mother_id_card_numb).HasColumnName("mother_id_card_numb");
            this.Property(t => t.permanent_home_commitcode).HasColumnName("permanent_home_commitcode");
            this.Property(t => t.residence_commitcode).HasColumnName("residence_commitcode");
            this.Property(t => t.doctor).HasColumnName("doctor");
            this.Property(t => t.father_phone).HasColumnName("father_phone");
            this.Property(t => t.mother_phone).HasColumnName("mother_phone");
            this.Property(t => t.work_type).HasColumnName("work_type");
            this.Property(t => t.fill_identity_type).HasColumnName("fill_identity_type");
            this.Property(t => t.birth_commitcode).HasColumnName("birth_commitcode");
            this.Property(t => t.worker_time_everyweek).HasColumnName("worker_time_everyweek");
            this.Property(t => t.father_email).HasColumnName("father_email");
            this.Property(t => t.mother_email).HasColumnName("mother_email");
            this.Property(t => t.chronic_disease_type).HasColumnName("chronic_disease_type");
            this.Property(t => t.birth_community_code).HasColumnName("birth_community_code");
            this.Property(t => t.present_community_code).HasColumnName("present_community_code");
            this.Property(t => t.fill_community_code).HasColumnName("fill_community_code");
        }
    }
}
