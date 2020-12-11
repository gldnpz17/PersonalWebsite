using Application.Auth.Queries.Login;
using AutoMapper;
using DomainModel.Entities;
using DomainModel.ValueObjects;
using PersonalWebsite.Common.DTOs.Auth;
using PersonalWebsite.Common.DTOs.Common;
using PersonalWebsite.Common.DTOs.Posts;
using PersonalWebsite.Common.DTOs.Profiles.Educations;
using PersonalWebsite.Common.DTOs.Profiles.Skills;
using PersonalWebsite.Common.DTOs.Projects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalWebsite.Common.Mapper
{
    public class AutoMapperConfig
    {
        public MapperConfiguration MapperConfiguration 
        {
            get 
            {
                return new MapperConfiguration(
                    (config) => 
                    {
                        //login
                        config.CreateMap<LoginResult, LoginResponseDto>();

                        //posts
                        config.CreateMap<CreatePostRequestDto, Post>();
                        config.CreateMap<Post, ReadAllPostsResponseDto>();
                        config.CreateMap<Post, ReadPostByIdResponseDto>();

                        //profiles/education
                        config.CreateMap<CreateEducationRequestDto, Education>();
                        config.CreateMap<Education, ReadAllEducationsResponseDto>();

                        //profiles/skills
                        config.CreateMap<CreateSkillRequestDto, Skill>();
                        config.CreateMap<Skill, ReadAllSkillsResponseDto>();

                        //projects
                        config.CreateMap<CreateProjectRequestDto, Project>();
                        config.CreateMap<Project, ReadAllProjectsResponseDto>();
                        config.CreateMap<Project, ReadProjectByIdResponseDto>();

                        //common
                        config.CreateMap<TagDto, Tag>();
                        config.CreateMap<Tag, TagDto>();

                        config.CreateMap<SkillTypeDto, SkillType>();
                        config.CreateMap<SkillType, SkillTypeDto>();
                    });
            } 
        }
    }
}
