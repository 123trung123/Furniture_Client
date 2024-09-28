import React from 'react';
import './blog.css';
import img1 from '../../resources/f.jpg';
import img2 from '../../resources/f1.jpg';
import img3 from '../../resources/f2.jpg';
import img4 from '../../resources/f3.jpg';
import img5 from '../../resources/f4.jpg'; // Add new image

const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Bí Quyết Chọn Nội Thất Phù Hợp Cho Không Gian Nhỏ",
            content: "Khi trang trí một không gian nhỏ, việc lựa chọn nội thất phù hợp là rất quan trọng. Hãy chú ý đến kích thước và kiểu dáng của các món đồ nội thất để tạo cảm giác thoáng đãng hơn cho không gian.",
            image: img1,
            size: 'large', // Larger blog card spanning 2 rows
        },
        {
            id: 2,
            title: "Tại Sao Nên Chọn Nội Thất Gỗ Tự Nhiên?",
            content: "Nội thất gỗ tự nhiên không chỉ bền bỉ mà còn mang lại vẻ đẹp sang trọng cho không gian sống.",
            image: "", // No image
            size: 'medium', // Medium blog card spanning 1 row
        },
        {
            id: 3,
            title: "Cách Bảo Quản Sofa Để Luôn Như Mới",
            content: "Sofa là một trong những món đồ nội thất quan trọng nhất trong ngôi nhà.",
            image: img2,
            size: 'large', // Larger blog card spanning 2 rows
        },
        {
            id: 4,
            title: "Màu Sắc Nội Thất Nào Phù Hợp Với Từng Phòng?",
            content: "Màu sắc của nội thất có thể ảnh hưởng đến tâm trạng và cảm giác của bạn.",
            image: "", // No image
            size: 'medium', // Medium blog card spanning 1 row
        },
        {
            id: 5,
            title: "Cách Sắp Xếp Nội Thất Để Tối Ưu Hóa Diện Tích",
            content: "Sắp xếp nội thất một cách khoa học giúp tối ưu hóa diện tích sử dụng.",
            image: img3,
            size: 'large', // Larger blog card spanning 2 rows
        },
        {
            id: 6,
            title: "Xu Hướng Nội Thất Năm 2024",
            content: "Cập nhật những xu hướng nội thất mới nhất trong năm 2024.",
            image: img4,
            size: 'medium', // Medium blog card spanning 1 row
        },
        {
            id: 7, // New blog entry
            title: "Cách Lựa Chọn Rèm Cửa Phù Hợp Với Phòng Khách",
            content: "Rèm cửa là yếu tố quan trọng trong việc hoàn thiện vẻ đẹp của phòng khách. Chọn rèm cửa phù hợp có thể tạo nên điểm nhấn cho không gian sống của bạn.",
            image: img5, // New image
            size: 'large', // Larger blog card spanning 2 rows
        }
    ];

    return (
        <div className="blog-page">
            <div className="blog-list">
                {blogs.map(blog => (
                    <div key={blog.id} className={`blog-card ${blog.size}`}>
                        {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-content">{blog.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
