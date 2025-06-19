import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './CourseSection.css';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Startup Fundamentals',
      instructor: 'Ananya Mehra',
      rating: 4.9,
      students: 1600,
      image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1000&q=80',
      category: 'Entrepreneurship'
    },
    {
      title: 'Building a Brand',
      instructor: 'Rahul Patel',
      rating: 4.8,
      students: 1300,
      image: 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1000&q=80',
      category: 'Marketing'
    },
    {
      title: 'Funding & Pitching',
      instructor: 'Neha Gupta',
      rating: 4.7,
      students: 980,
      image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1000&q=80',
      category: 'Finance'
    },
    {
      title: 'Digital Business Models',
      instructor: 'Amit Sharma',
      rating: 4.8,
      students: 1100,
      image: 'https://images.unsplash.com/photo-1581090700227-1e8f6b6dd15e?auto=format&fit=crop&w=1000&q=80',
      category: 'Strategy'
    }
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Entrepreneurship Courses</h2>
          <p className="section-subtitle">Master the art of building and growing a business</p>
        </div>

        <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={5}
  slidesPerView={1.7}
  centeredSlides={true}
  loop={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  className="custom-swiper"
  breakpoints={{
    0: {
      slidesPerView: 1.1,
    },
    640: {
      slidesPerView: 1.3,
    },
    1024: {
      slidesPerView: 1.7,
    }
  }}
>
  {courses.map((course, index) => (
    <SwiperSlide key={index}>
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">By {course.instructor}</p>
        <div className="course-meta">
          ⭐ {course.rating} | 👥 {course.students.toLocaleString()}
        </div>
        <button className="enroll-btn">Enroll Now</button>
      </div>
    </div>
  </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
};

export default CoursesSection;