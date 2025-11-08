import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  itServices = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications using Angular and .NET.',
      image: 'https://cdn-icons-png.flaticon.com/512/841/841364.png'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps for Android and iOS.',
      image: 'https://cdn-icons-png.flaticon.com/512/3081/3081102.png'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable deployments on Azure, AWS, and Google Cloud.',
      image: 'https://cdn-icons-png.flaticon.com/512/616/616490.png'
    }
  ];

  nmCourses = [
    {
      name: 'Full Stack Development',
      description: 'Learn frontend and backend development with real-time projects.',
      image: 'https://cdn-icons-png.flaticon.com/512/4072/4072615.png'
    },
    {
      name: 'AI & Data Science',
      description: 'Hands-on learning for machine learning and AI integration.',
      image: 'https://cdn-icons-png.flaticon.com/512/2977/2977356.png'
    }
  ];

  portfolio = [
    {
      name: 'E-Commerce Platform',
      detail: 'A complete shopping website built for a retail client.',
      image: 'e-commerce.jpeg'
    },
    {
      name: 'Educational Portal',
      detail: 'Naan Mudhalvan online learning dashboard for students.',
      image: 'Educational-Portal.jpeg'
    }
  ];
}
