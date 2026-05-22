import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Award, Zap, Clock, Globe, Target, TrendingUp, Shield, Cpu, CheckCircle, Database, FileText, BarChart3, Copy, Clipboard, Calendar, Megaphone } from "lucide-react";
import ConnectBanner from "../components/ConnectBanner";

const serviceData = {
  customer: {
    title: "Customer Service Outsourcing",
    intro: "Customer Service Outsourcing is the practice of outsourcing customer support operations to a specialized third-party provider. It allows businesses to focus on core competencies while ensuring exceptional customer experiences. By leveraging outsourcing, companies can enhance customer satisfaction, optimize operational costs, and access global support resources, including multilingual assistance.",
    introImg: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/CUSTOMER-SERVICE.jpeg-1024x585.jpg",
    bgImage: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/CUSTOMER-SERVICE-OUTSOURCING-desktop.jpg",
    connectBanner: {
      title: "Let's Elevate Your Customer Service Experience",
      descriptionPrefix: "Partner with us for an efficient and customer-focused outsourcing solution. Get in touch with us ",
      formLink: "/contact",
      formText: "here",
      descriptionMiddle: " or email us at ",
      email: "contactus@portcitybpo.lk",
      emailText: "contactus@portcitybpo.lk",
      descriptionSuffix: " to enhance your customer satisfaction and drive growth.",
      buttonText: "Contact Us",
      backgroundImage: "https://portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-home.webp"
    },
    solutions: {
      heading: "Our Customer Service Solutions",
      subheading: "Comprehensive support tailored to your business needs",
      items: [
        {
          icon: <Award size={32} className="text-[#f4a631]" />,
          title: "Customer Support & Inquiry Handling",
          desc: "We excel at managing customer enquiries across chat, email, and social media to provide fast and accurate responses. Our support team ensures a seamless experience, building lasting customer relationships and problem resolution.",
        },
        {
          icon: <Zap size={32} className="text-[#f4a631]" />,
          title: "Technical Support Services",
          desc: "Troubleshooting for software, hardware, and digital service. We help customers with setup, installation, configuration, diagnostics and frustration.",
        },
        {
          icon: <Clock size={32} className="text-[#f4a631]" />,
          title: "Order Management & Billing Support",
          desc: "Billing inquiries, and payment disputes to ensure smooth transaction completion and customer satisfaction.",
        },
        {
          icon: <Globe size={32} className="text-[#f4a631]" />,
          title: "Complaint Resolution & Dispute",
          desc: "We professionally address complaints ensuring resolution and customer satisfaction, enhancing brand reputation through customer-centric handling.",
        },
        {
          icon: <Target size={32} className="text-[#f4a631]" />,
          title: "Multilingual Customer Support",
          desc: "We provide multilingual customer support across regions to improve customer accessibility, ensuring a more personalized and engaging interaction.",
        },
        {
          icon: <TrendingUp size={32} className="text-[#f4a631]" />,
          title: "Customer Feedback & Satisfaction Analysis",
          desc: "We collect and analyze customer feedback to identify pain points, measure satisfaction levels, and implement data-driven service improvements.",
        },
      ],
    },
    playbook: {
      heading: "Our Playbook",
      subheading: "The methodologies that drive our success",
      items: [
        { title: "Customer-Centric Approach", desc: "Every interaction is designed to enhance customer experience and satisfaction." },
        { title: "Data-Driven Insights", desc: "Our analytics-driven approach optimizes every customer interaction and strategy." },
        { title: "Scalable Solutions", desc: "We offer flexible support structures that grow with your business needs." },
        { title: "Compliance & Security", desc: "Strict adherence to data privacy and security protocols for customer protection." },
        { title: "Continuous Training & Improvement", desc: "Our agents undergo ongoing training on the latest customer service trends." },
      ],
    },
    benefits: {
      heading: "Why Choose Us?",
      subheading: "Optimize Your Customer Service",
      items: [
        { title: "Experienced Professionals", desc: "Access to highly skilled agents with years of customer service expertise." },
        { title: "Cost-Effective Solutions", desc: "Reduce overhead while maintaining high-quality customer support operations." },
        { title: "24/7 Support Availability", desc: "Round-the-clock assistance to customers across different time zones." },
        { title: "Multilingual Support", desc: "Support in multiple languages to reach diverse customer bases." },
        { title: "Customized Service Models", desc: "Tailored solutions that align with your specific business requirements." },
      ],
    },
  },
  technical: {
    title: "Technical Support Outsourcing",
    intro: "Technical Support Outsourcing is the process of delegating IT-related support functions to a specialized service provider. This approach enables businesses to access expert technical assistance without the need for in-house IT teams, reducing costs while ensuring top-tier support. From troubleshooting hardware and software issues to managing networks, cloud computing, and cybersecurity, outsourcing technical support helps businesses stay competitive in the digital landscape. By leveraging outsourced technical support, companies benefit from 24/7 assistance, scalability, and access to cutting-edge technology solutions, ensuring seamless IT operations and enhanced user experiences.",
    introImg: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TECH-SUPPORT-1024x585.png",
    bgImage: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TECHNICAL-SUPPORT-OUTSOURCING-desktop.jpg",
    connectBanner: {
      title: "Let's Elevate Your Technical Support Strategy",
      descriptionPrefix: "Partner with us for expert, reliable, and cost-effective technical support outsourcing. Get in touch with us ",
      formLink: "/contact",
      formText: "here",
      descriptionMiddle: " or email us at ",
      email: "contactus@portcitybpo.lk",
      emailText: "contactus@portcitybpo.lk",
      descriptionSuffix: " to enhance your IT operations and ensure a seamless user experience",
      buttonText: "Contact Us",
      backgroundImage: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-services.webp"
    },
    solutions: {
      heading: "Our Technical Support Outsourcing Solutions",
      subheading: "Comprehensive IT support for modern businesses",
      items: [
        { icon: <Clock size={32} className="text-[#f4a631]" />, title: "Help Desk & Remote IT Support", desc: "Our responsive help desk services ensure that customers receive timely support for their technical queries, whether it's software troubleshooting, login issues, or device setup. With remote access capabilities, our experts can diagnose and resolve issues efficiently without needing on-site visits." },
        { icon: <Cpu size={32} className="text-[#f4a631]" />, title: "Hardware & Software Troubleshooting", desc: "We provide technical troubleshooting for desktops, laptops, mobile devices, and software applications. Whether it's resolving compatibility issues, fixing system errors, or updating software, our team ensures smooth operations with minimal disruptions." },
        { icon: <Globe size={32} className="text-[#f4a631]" />, title: "Network & System Administration", desc: "Our team of specialists manages network infrastructure, server maintenance, and system configurations to ensure uptime and security. We provide proactive monitoring, firewall management, and routine system optimizations to maintain seamless IT operations." },
        { icon: <Shield size={32} className="text-[#f4a631]" />, title: "Cloud Computing Support", desc: "We assist businesses in migrating to the cloud, managing cloud-based applications, and optimizing cloud performance. Our support extends to AWS, Azure, and Google Cloud platforms, ensuring data security, cost-efficiency, and scalability." },
        { icon: <Target size={32} className="text-[#f4a631]" />, title: "Cybersecurity & Threat Management", desc: "Protect your business from cyber threats with our advanced security solutions. We offer firewall management, malware detection, endpoint security, and compliance management to safeguard sensitive information from cyber attacks." },
        { icon: <TrendingUp size={32} className="text-[#f4a631]" />, title: "Data Analytics & IT Consulting", desc: "Make data-driven decisions with our analytics and IT consulting services. We help businesses leverage big data, optimize IT strategies, and implement best practices to improve operational efficiency." },
        { icon: <Zap size={32} className="text-[#f4a631]" />, title: "Application Support & Maintenance", desc: "Our team provides ongoing support for enterprise applications, ensuring they remain up-to-date and function optimally. We handle bug fixes, feature enhancements, and system performance monitoring to improve software efficiency." },
        { icon: <Award size={32} className="text-[#f4a631]" />, title: "Technical Training & Quality Assurance", desc: "We offer technical training programs to help your employees stay updated on the latest IT trends and technologies. Our quality assurance team ensures all IT systems and applications meet industry standards for reliability and performance." },
      ],
    },
    playbook: {
      heading: "PLAYBOOK",
      subheading: "Our Playbook",
      items: [
        { icon: <Target size={28} className="text-sky-600" />, title: "Customer-Centric Approach", desc: "We prioritize user satisfaction by providing fast, reliable, and personalized technical support." },
        { icon: <Globe size={28} className="text-sky-600" />, title: "Scalability & Flexibility", desc: "Our services scale to meet the evolving needs of startups, SMEs, and enterprises." },
        { icon: <Shield size={28} className="text-sky-600" />, title: "Proactive Monitoring & Maintenance", desc: "Our proactive approach minimizes downtime and prevents technical disruptions." },
        { icon: <Award size={28} className="text-sky-600" />, title: "Compliance & Security", desc: "We follow industry standards to ensure data protection and regulatory compliance." },
        { icon: <TrendingUp size={28} className="text-sky-600" />, title: "Continuous Training & Improvement", desc: "Our team stays ahead of technological advancements, ensuring innovative and updated solutions." },
      ],
    },
    benefits: {
      heading: "Why Choose Us?",
      subheading: "Elevate Your Technical Support",
      items: [
        { title: "Experienced Professionals", desc: "Our team consists of certified IT experts with extensive industry knowledge." },
        { title: "Cost-Effective Solutions", desc: "Reduce operational costs while maintaining high-quality IT support." },
        { title: "24/7 Support Availability", desc: "We provide round-the-clock support to address any technical issues promptly." },
        { title: "Multichannel Support", desc: "We offer assistance via phone, email, live chat, and remote access tools." },
        { title: "Proactive & Preventive Approach", desc: "Our strategy focuses on minimizing downtime and ensuring seamless IT operations." },
      ],
    },
  },
  data: {
    title: "Data Entry and Processing Outsourcing",
    intro: "Data Entry and Processing Outsourcing involves delegating data-related tasks to specialized service providers to ensure efficiency, accuracy, and security. Businesses dealing with large volumes of data benefit from streamlined workflows, reduced operational costs, and enhanced data integrity. Whether it's manual data entry, data cleansing, conversion, or analysis, outsourcing these tasks allows organizations to focus on core business operations while maintaining high data quality and compliance. By leveraging outsourced technical support, companies benefit from 24/7 assistance, scalability, and access to cutting-edge technology solutions, ensuring seamless IT operations and enhanced user experiences.",
    introImg: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/DATA-ENTRY-1024x585.png",
    bgImage: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Data-Entry-and-Processing-Outsourcing-desktop.jpg",
    connectBanner: {
      title: "Optimize Your Data Processing with Us",
      descriptionPrefix: "Let us handle your data entry and processing needs with precision and efficiency. Get in touch with us ",
      formLink: "/contact",
      formText: "here",
      descriptionMiddle: " or email us at ",
      email: "contactus@portcitybpo.lk",
      emailText: "contactus@portcitybpo.lk",
      descriptionSuffix: " to learn how we can streamline your business operations and enhance data reliability.",
      buttonText: "Contact Us",
      backgroundImage: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-services.webp"
    },
    solutions: {
      heading: "Our Data Entry and Processing Outsourcing Solutions",
      subheading: "Comprehensive data management for modern businesses",
      items: [
        { icon: <Copy size={32} className="text-[#f4a631]" />, title: "Manual Data Entry", desc: "Our expert data entry specialists accurately input large volumes of data from physical or digital sources into structured formats, ensuring consistency and reliability." },
        { icon: <CheckCircle size={32} className="text-[#f4a631]" />, title: "Data Cleansing & Validation", desc: "We enhance the quality of your data by removing duplicates, correcting errors, and validating records to maintain accuracy and compliance with industry standards." },
        { icon: <FileText size={32} className="text-[#f4a631]" />, title: "Data Conversion Services", desc: "Convert data from one format to another seamlessly. We handle document digitization, PDF to Excel conversion, database transformations, and more to make data more accessible and usable." },
        { icon: <Database size={32} className="text-[#f4a631]" />, title: "Data Verification & Quality Control", desc: "We implement stringent validation checks to ensure that data is accurate, consistent, and meets business requirements, reducing the risk of errors in reports and decision-making." },
        { icon: <BarChart3 size={32} className="text-[#f4a631]" />, title: "Data Mining & Extraction", desc: "Our team extracts valuable insights from raw data, leveraging advanced data mining techniques to help businesses identify trends, patterns, and opportunities." },
        { icon: <Award size={32} className="text-[#f4a631]" />, title: "Document Indexing & Categorization", desc: "We organize and categorize large volumes of documents for easy retrieval, ensuring that business records remain structured and accessible." },
        { icon: <Target size={32} className="text-[#f4a631]" />, title: "OCR (Optical Character Recognition) Processing", desc: "Leverage advanced OCR technology to extract text from scanned documents, making paper-based records searchable and editable in digital formats." },
        { icon: <Clipboard size={32} className="text-[#f4a631]" />, title: "Forms Processing & Surveys", desc: "We process forms, customer surveys, and feedback responses efficiently, helping businesses analyze and utilize structured data for insights and decision-making." },
      ],
    },
    playbook: {
      heading: "PLAYBOOK",
      subheading: "Our Playbook",
      items: [
        { icon: <CheckCircle size={28} className="text-[#f4a631]" />, title: "Accuracy & Precision", desc: "We ensure meticulous attention to detail in all data-related tasks to minimize errors." },
        { icon: <Globe size={28} className="text-[#f4a631]" />, title: "Scalability & Flexibility", desc: "Our services are designed to grow with your business, adapting to increasing data needs." },
        { icon: <Shield size={28} className="text-[#f4a631]" />, title: "Data Security & Compliance", desc: "We adhere to strict confidentiality policies to protect sensitive information." },
        { icon: <Target size={28} className="text-[#f4a631]" />, title: "Customizable Solutions", desc: "We tailor data processing workflows to meet specific industry and business requirements." },
        { icon: <TrendingUp size={28} className="text-[#f4a631]" />, title: "Cost-Effective Operations", desc: "Outsourcing with us helps businesses reduce costs while maintaining high-quality data management." },
      ],
    },
    benefits: {
      heading: "Why Choose Us?",
      subheading: "Optimise Your Data Processing",
      items: [
        { title: "Experienced Data Specialists", desc: "Our team consists of skilled professionals with expertise in data handling." },
        { title: "Advanced Technology Integration", desc: "We use cutting-edge tools to optimize efficiency and accuracy." },
        { title: "24/7 Support Availability", desc: "Our global operations ensure timely data processing with around-the-clock support." },
        { title: "Confidentiality & Security Compliance", desc: "We prioritize data security, following stringent protocols to safeguard sensitive information." },
        { title: "Faster Turnaround Times", desc: "Our optimized workflows ensure quick and accurate data processing." },
      ],
    },
  },
  humanresources: {
    title: "Human Resources Outsourcing",
    intro: "Human Resources Outsourcing (HRO) is the process of delegating HR functions to a third-party provider, allowing businesses to focus on their core operations while ensuring efficient and compliant workforce management. By outsourcing HR tasks such as recruitment, payroll processing, employee relations, and compliance management, companies can reduce administrative burdens, cut costs, and improve operational efficiency. HRO provides access to expert HR professionals, advanced technology, and scalable solutions tailored to meet evolving business needs. By leveraging outsourced technical support, companies benefit from 24/7 assistance, scalability, and access to cutting-edge technology solutions, ensuring seamless IT operations and enhanced user experiences.",
    introImg: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/HR.jpeg-768x439.jpg",
    bgImage: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Human-Resources-Outsourcing-desktop.jpg",
    connectBanner: {
      title: "Streamline Your HR Operations Today",
      descriptionPrefix: "Partner with us for efficient and compliant HR outsourcing solutions. Get in touch with us ",
      formLink: "/contact",
      formText: "here",
      descriptionMiddle: " or email us at ",
      email: "contactus@portcitybpo.lk",
      emailText: "contactus@portcitybpo.lk",
      descriptionSuffix: " to optimize your HR functions and enhance employee experience.",
      buttonText: "Contact Us",
      backgroundImage: "https://portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-home.webp"
    },
    solutions: {
      heading: "Our Human Resources Outsourcing Solutions",
      subheading: "Comprehensive workforce management for modern businesses",
      items: [
        { icon: <Target size={32} className="text-[#f4a631]" />, title: "Recruitment & Talent Acquisition", desc: "We manage the entire recruitment lifecycle, from job postings and candidate screening to interviews and offer negotiations. Our strategic hiring process ensures you attract and retain top talent for your business." },
        { icon: <Award size={32} className="text-[#f4a631]" />, title: "Onboarding & Employee Integration", desc: "Our structured onboarding programs help new hires seamlessly transition into their roles. We handle paperwork, training coordination, and cultural integration to enhance employee engagement and retention." },
        { icon: <Clock size={32} className="text-[#f4a631]" />, title: "Payroll & Benefits Administration", desc: "We streamline payroll processing and benefits management, ensuring accurate salary disbursement, tax compliance, and administration of health, retirement, and other employee benefits." },
        { icon: <Database size={32} className="text-[#f4a631]" />, title: "Employee Records & HR Documentation", desc: "We manage employee records, contracts, and HR documentation with accuracy and confidentiality. Our secure systems ensure easy access and compliance with data protection laws." },
        { icon: <TrendingUp size={32} className="text-[#f4a631]" />, title: "Performance Management & Training", desc: "We provide customized training programs, skills development workshops, and performance evaluation frameworks to foster employee growth and productivity." },
        { icon: <Shield size={32} className="text-[#f4a631]" />, title: "Employee Relations & Workplace Compliance", desc: "Our HR experts handle employee grievances, conflict resolution, and workplace compliance to maintain a positive and legally compliant work environment." },
        { icon: <FileText size={32} className="text-[#f4a631]" />, title: "HR Policy Development & Implementation", desc: "We create and implement HR policies aligned with labor laws and industry best practices, ensuring fair treatment and workplace efficiency." },
        { icon: <BarChart3 size={32} className="text-[#f4a631]" />, title: "HR Data Analytics & Workforce Planning", desc: "We utilize data-driven insights to help businesses make informed HR decisions, optimize workforce planning, and predict future talent needs." },
      ],
    },
    playbook: {
      heading: "PLAYBOOK",
      subheading: "Our Playbook",
      items: [
        { icon: <Target size={28} className="text-purple-600" />, title: "Strategic Workforce Planning", desc: "We align HR strategies with business goals to drive long-term success." },
        { icon: <Cpu size={28} className="text-purple-600" />, title: "Technology-Driven Efficiency", desc: "We leverage HR management software to streamline processes and improve decision-making." },
        { icon: <Shield size={28} className="text-purple-600" />, title: "Compliance & Risk Management", desc: "We ensure adherence to employment laws and regulations to mitigate risks." },
        { icon: <Award size={28} className="text-purple-600" />, title: "Talent-Centric Approach", desc: "Our focus on employee engagement and development fosters a productive workplace." },
        { icon: <TrendingUp size={28} className="text-purple-600" />, title: "Cost-Effective HR Solutions", desc: "Reduce overhead costs while maintaining high-quality HR services." },
      ],
    },
    benefits: {
      heading: "Why Choose Us?",
      subheading: "Elevate Your HR Operations",
      items: [
        { title: "Experienced HR Professionals", desc: "Our team brings extensive industry expertise and HR best practices." },
        { title: "Comprehensive HR Solutions", desc: "From hiring to compliance, we cover all HR needs under one roof." },
        { title: "Data Security & Confidentiality", desc: "We prioritize the protection of employee records and sensitive HR information." },
        { title: "Industry-Specific Expertise", desc: "We tailor HR strategies based on industry trends and business demands." },
        { title: "Focus on Business Growth", desc: "By outsourcing HR functions, you can focus on scaling your business while we handle workforce management." },
      ],
    },
  },
  finance: {
    title: "Finance and Accounting Outsourcing",
    intro: "Finance and Accounting Outsourcing (FAO) is the practice of delegating financial operations and accounting tasks to a third-party service provider. This allows businesses to focus on core activities while ensuring financial accuracy, compliance, and efficiency. FAO covers a wide range of financial functions, including bookkeeping, tax management, payroll processing, financial reporting, and risk assessment. By outsourcing these services, companies can reduce costs, streamline financial operations, and gain access to expert financial professionals. By leveraging outsourced technical support, companies benefit from 24/7 assistance, scalability, and access to cutting-edge technology solutions, ensuring seamless IT operations and enhanced user experiences.",
    introImg: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/ACCOUNTING-1.jpeg-768x439.jpg",
    bgImage: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Finance-and-Accounting-Outsourcing-desktop.jpg",
    connectBanner: {
      title: "Transform Your Financial Operations Today",
      descriptionPrefix: "Partner with us for expert finance and accounting outsourcing solutions. Get in touch with us ",
      formLink: "/contact",
      formText: "here",
      descriptionMiddle: " or email us at ",
      email: "contactus@portcitybpo.lk",
      emailText: "contactus@portcitybpo.lk",
      descriptionSuffix: " to enhance efficiency, compliance, and financial growth.",
      buttonText: "Contact Us",
      backgroundImage: "https://portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-home.webp"
    },
    solutions: {
      heading: "Our Finance and Accounting Outsourcing Solutions",
      subheading: "Comprehensive financial management for modern businesses",
      items: [
        { icon: <FileText size={32} className="text-[#f4a631]" />, title: "Accounts Payable Management", desc: "We handle vendor transactions, supplier relationships, invoice processing, and payment scheduling to ensure timely and accurate payments while maintaining positive supplier relationships." },
        { icon: <TrendingUp size={32} className="text-[#f4a631]" />, title: "Accounts Receivable & Collections", desc: "Our team ensures prompt invoicing, payment tracking, and customer collections to improve cash flow and minimize outstanding receivables." },
        { icon: <Database size={32} className="text-[#f4a631]" />, title: "Bookkeeping & General Accounting", desc: "We manage daily financial records, reconcile transactions, and prepare financial statements to maintain accurate and organized financial data." },
        { icon: <Clock size={32} className="text-[#f4a631]" />, title: "Payroll Processing", desc: "We oversee payroll management, salary disbursement, tax deductions, and compliance with labor laws to ensure accurate employee compensation." },
        { icon: <BarChart3 size={32} className="text-[#f4a631]" />, title: "Financial Reporting & Analysis", desc: "Our financial experts prepare detailed reports and financial statements to provide business insights, budget forecasting, and data-driven decision-making." },
        { icon: <Shield size={32} className="text-[#f4a631]" />, title: "Tax Preparation & Compliance", desc: "We handle corporate tax filings, tax planning, and compliance with local and international tax regulations to minimize liabilities and avoid penalties." },
        { icon: <Target size={32} className="text-[#f4a631]" />, title: "Expense Management & Cost Control", desc: "We optimize expense tracking, cost analysis, and budget allocation to help businesses reduce operational costs and maximize profitability." },
        { icon: <Award size={32} className="text-[#f4a631]" />, title: "Risk Management & Internal Auditing", desc: "Our internal audit and risk assessment services identify potential financial risks, ensuring compliance with industry standards and regulatory requirements." },
      ],
    },
    playbook: {
      heading: "PLAYBOOK",
      subheading: "Our Playbook",
      items: [
        { title: "Accuracy & Compliance", desc: "We ensure financial transactions and reports meet regulatory and accounting standards." },
        { title: "Cost Optimization", desc: "Reduce financial overheads while maintaining operational excellence." },
        { title: "Scalability & Flexibility", desc: "Our solutions grow with your business, adapting to increased financial complexity." },
        { title: "Data Security & Confidentiality", desc: "We adhere to strict security protocols to protect sensitive financial information." },
        { title: "Expert Financial Advisory", desc: "Gain access to financial professionals who provide strategic insights and guidance." },
      ],
    },
    benefits: {
      heading: "Why Choose Us?",
      subheading: "Elevate Your Accounting & Finance Operations",
      items: [
        { title: "Experienced Finance Professionals", desc: "Our team consists of certified accountants and financial experts." },
        { title: "End-to-End Financial Solutions", desc: "We cover all aspects of financial management under one service." },
        { title: "Scalable Services", desc: "Whether you're a startup or a multinational, we adapt to your financial needs." },
        { title: "Technology-Driven Efficiency", desc: "We utilize advanced financial software to improve accuracy and productivity." },
        { title: "Proactive Cash Flow Management", desc: "Our strategies help optimize cash flow and improve financial stability." },
      ],
    },
  },
  marketing: {
    title: "Marketing Outsourcing",
    intro: "Marketing Outsourcing is the practice of entrusting marketing functions to an external team of experts, allowing businesses to focus on core operations while benefiting from specialized marketing strategies. It covers a wide range of services, from lead generation and brand positioning to digital marketing and campaign management. By outsourcing marketing, businesses can leverage industry expertise, advanced technology, and cost-effective solutions to maximize their brand reach and customer engagement. By leveraging outsourced technical support, companies benefit from 24/7 assistance, scalability, and access to cutting-edge technology solutions, ensuring seamless IT operations and enhanced user experiences.",
    introImg: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/MARKETING-2.jpeg-768x439.jpg",
    bgImage: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Marketing-Outsourcing-desktop_.jpg",
    connectBanner: {
      title: "Boost Your Marketing with Our Expertise",
      descriptionPrefix: "Let us take your marketing efforts to the next level. Get in touch with us ",
      formLink: "/contact",
      formText: "here",
      descriptionMiddle: " or email us at ",
      email: "contactus@portcitybpo.lk",
      emailText: "contactus@portcitybpo.lk",
      descriptionSuffix: " to discuss how our outsourcing solutions can drive growth, increase engagement, and enhance brand visibility.",
      buttonText: "Contact Us",
      backgroundImage: "https://portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-home.webp"
    },
    solutions: {
      heading: "Our Marketing Outsourcing Solutions",
      subheading: "Comprehensive marketing strategies for modern businesses",
      items: [
        { icon: <Target size={32} className="text-[#f4a631]" />, title: "Lead Generation & Data Management", desc: "We help businesses generate high-quality leads through targeted marketing strategies. Our team manages data collection, customer profiling, and segmentation to optimize lead conversion rates and improve marketing ROI." },
        { icon: <TrendingUp size={32} className="text-[#f4a631]" />, title: "Digital Marketing & SEO", desc: "We craft data-driven digital marketing strategies, including search engine optimization (SEO), content marketing, PPC advertising, and social media marketing, to enhance online visibility and drive traffic." },
        { icon: <Award size={32} className="text-[#f4a631]" />, title: "Brand Strategy & Positioning", desc: "We develop comprehensive brand strategies that define your unique value proposition and establish a strong market presence. Our approach ensures brand consistency across all channels." },
        { icon: <Globe size={32} className="text-[#f4a631]" />, title: "Social Media Management", desc: "Our team manages social media platforms to enhance audience engagement, brand awareness, and customer interactions through strategic content creation and community management." },
        { icon: <Calendar size={32} className="text-[#f4a631]" />, title: "Event Marketing & Management", desc: "From planning corporate events to product launches and trade shows, we ensure seamless event marketing strategies that boost brand exposure and engagement." },
        { icon: <Megaphone size={32} className="text-[#f4a631]" />, title: "Public Relations & Media Outreach", desc: "We build and maintain strong media relationships, ensuring positive press coverage and enhancing brand reputation through PR campaigns and media outreach efforts." },
        { icon: <Zap size={32} className="text-[#f4a631]" />, title: "Campaign Planning & Execution", desc: "We design and execute multi-channel marketing campaigns tailored to target audiences, ensuring impactful messaging and measurable results." },
        { icon: <BarChart3 size={32} className="text-[#f4a631]" />, title: "Marketing Analytics & Performance Tracking", desc: "We leverage advanced analytics to measure campaign performance, track KPIs, and provide actionable insights to continuously optimize marketing strategies." },
      ],
    },
    playbook: {
      heading: "PLAYBOOK",
      subheading: "Our Playbook",
      items: [
        { title: "Data-Driven Decision Making", desc: "We use analytics and market research to drive marketing strategies that deliver measurable results." },
        { title: "Creative Storytelling", desc: "Our team crafts compelling brand stories that resonate with target audiences and enhance brand loyalty." },
        { title: "Omnichannel Approach", desc: "We integrate multiple marketing channels to maximize reach and engagement." },
        { title: "Cost-Effective Solutions", desc: "Our outsourcing model helps businesses save costs while maintaining high marketing efficiency." },
        { title: "Agile & Scalable Strategies", desc: "We tailor marketing plans that adapt to business growth and evolving market trends." },
      ],
    },
    benefits: {
      heading: "Why Choose Us?",
      subheading: "Boost Your Marketing",
      items: [
        { title: "Experienced Marketing Professionals", desc: "Our team consists of industry experts with extensive experience in various marketing domains." },
        { title: "Customized Marketing Strategies", desc: "We tailor solutions to match business objectives, industry trends, and target audience needs." },
        { title: "Access to Advanced Marketing Tools", desc: "We leverage cutting-edge technology to automate and optimize marketing campaigns." },
        { title: "Scalable & Flexible Services", desc: "Our services adapt to your business growth and evolving marketing needs." },
        { title: "End-to-End Marketing Solutions", desc: "From strategy to execution, we cover all aspects of marketing, ensuring seamless and effective brand promotion." },
      ],
    },
  },
};
const cubeImages = [
  "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pic-16.png", // Cube A
  "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pic-14.png", // Cube B
  "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pic-15.png", // Cube C
  "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pic-18.png", // Cube D
  "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pic-17.png"  // Cube E
];

export default function ServiceDetail() {
  const { id } = useParams();
  const serviceId = id || "customer";
  const data = serviceData[serviceId] || serviceData.customer;

  // Dynamic styling based on service type
  const styleConfig = {
    customer: { accentHex: "#0ea5e9", subtitleClass: "text-sky-400" },
    technical: { accentHex: "#fb923c", subtitleClass: "text-orange-400" },
    data: { accentHex: "#3b82f6", subtitleClass: "text-blue-400" },
  }[serviceId] || { accentHex: "#0ea5e9", subtitleClass: "text-sky-400" };

  return (
    <div className="min-h-screen bg-white">
      <Navbar active="services" />

      <header
        className="relative h-80 flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${data.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold">{data.title}</h1>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src={data.introImg} alt={data.title} className="w-full h-auto rounded-[55px_10px_55px_10px] md:rounded-[55px_10px_55px_10px] object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sky-700 mb-6">What is {data.title}?</h2>
              <p className="text-gray-700 leading-8 mb-6">{data.intro}</p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative py-20 overflow-hidden bg-[#f4f7f9]">
          {/* Background Graphic Asset Overlay Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage: `url('https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pic-6.jpg')`
            }}
          />

          {/* Structural Containment Base */}
          <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12">

            {/* Dynamic Image Header Configuration */}
            <div className="text-center mb-14">
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#0b2545] tracking-tight leading-tight">
                {data.solutions.heading}
              </h2>
              <span className="block text-[28px] sm:text-[34px] font-bold text-[#005ca9] tracking-tight leading-tight mt-1">
                {data.solutions.subheading}
              </span>
            </div>

            {/* Responsive Layout Grid matching Image Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 items-stretch">
              {data.solutions.items.map((sol, i) => {
                // Total items check to identify the final 2 items dynamically
                const isLastTwo = i >= data.solutions.items.length - 2;

                return (
                  <div
                    key={i}
                    className={`bg-white rounded-[16px] p-8 border border-[#e2e8f0]/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex flex-col items-start transition-all duration-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] ${isLastTwo
                        ? "col-span-1 sm:col-span-1 lg:col-span-3" // Last 2 items split 50/50 across the full 6-column baseline row width
                        : "col-span-1 sm:col-span-1 lg:col-span-2" // Standard items take up normal 1/3 of the row width
                      }`}
                  >
                    {/* Subtle Orange-tinted Minimalist Icon Box (Circular) */}
                    <div className="w-9 h-9 rounded-full bg-[#fcf8f2] flex items-center justify-center text-[#ff9933] mb-5 shadow-sm shrink-0">
                      {sol.icon}
                    </div>

                    {/* Title Header */}
                    <h3 className="text-[16px] font-bold text-[#0b2545] tracking-tight leading-snug mb-3">
                      {sol.title}
                    </h3>

                    {/* Body Text */}
                    <p className="text-[13px] text-zinc-500 font-normal leading-[1.65]">
                      {sol.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="bg-white py-20 select-none overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12">

            {/* Playbook Header Typography Stack */}
            <div className="text-center mb-16 md:mb-24">
              <span className="block text-[12px] sm:text-[13px] font-bold text-[#005ca9] tracking-[0.2em] uppercase mb-2">
                {data?.playbook?.subheading || "PLAYBOOK"}
              </span>
              <h2 className="text-[32px] sm:text-[38px] font-bold text-black tracking-tight">
                {data?.playbook?.heading || "Our Playbook"}
              </h2>
            </div>

            {/* 6-Column Base Grid to handle the precise 3-on-top, 2-on-bottom shift symmetrically */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-16 gap-x-8 items-start">
              {(data?.playbook?.items || []).map((item, i) => {
                // Checkers to identify layout orientation row indices dynamically 
                const isItemD = i === 3;
                const isItemE = i === 4;

                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center transition-transform duration-200 ${isItemD ? "lg:col-span-2 lg:col-start-2 md:col-span-1" : "" // Centers Item D in the lower half row splits
                      } ${isItemE ? "lg:col-span-2 md:col-span-1" : "" // Snaps Item E directly adjacent to D
                      } ${i < 3 ? "lg:col-span-2 md:col-span-1" : "" // Rows 1-3 take up 1/3 widths perfectly on desktop sizes
                      }`}
                  >
                    {/* Floating Isometric 3D Letter Cubes Image Asset */}
                    <div className="w-40 h-32 flex items-center justify-center mb-4 transform hover:scale-105 transition-transform duration-200 ease-out">
                      <img
                        src={cubeImages[i] || "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pic-16.png"}
                        alt={`Playbook vector visualization indicator step`}
                        className="max-w-full max-h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.03)]"
                      />
                      {/* Fallback to code icon render if passed conditionally */}
                      {item.icon && !cubeImages[i] && <div className="text-[#005ca9]">{item.icon}</div>}
                    </div>

                    {/* Structured Text Metadata Info Block */}
                    <div className="max-w-[280px] px-2">
                      <h3 className="text-[16px] sm:text-[17px] font-bold text-black tracking-tight leading-snug mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-zinc-500 font-normal leading-[1.65]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          {/* Centered Deep Gradient Content Panel */}
          <div className="max-w-[1240px] mx-auto bg-gradient-to-b from-[#163563] to-[#0c1e3a] rounded-[16px] py-12 px-6 sm:px-10 lg:px-12 shadow-xl">

            {/* Main Section Header */}
            <div className="text-center mb-2">
              <h2 className="text-[28px] sm:text-[34px] font-bold text-white tracking-tight">
                {data.benefits.heading}
              </h2>
            </div>

            {/* Highlighted Orange Subtitle Accent */}
            <div className="text-center mb-12">
              <p className="text-[14px] sm:text-[15px] font-bold text-[#ff9933] tracking-wide uppercase">
                {data.benefits.subheading}
              </p>
            </div>

            {/* Benefits Horizontal Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 items-start">
              {data.benefits.items.map((benefit, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center text-center px-2 relative ${i !== 0 ? "md:border-l md:border-white/20" : ""
                    }`}
                >
                  {/* Feature Title */}
                  <h3 className="font-bold text-[16px] sm:text-[17px] text-white leading-snug tracking-tight mb-4 min-h-[46px] flex items-center justify-center">
                    {benefit.title}
                  </h3>

                  {/* Feature Body Copy */}
                  <p className="text-[12.5px] text-[#ff9933] font-normal leading-[1.6] max-w-[220px]">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Banner */}
        {data.connectBanner && (
          <ConnectBanner
            title={data.connectBanner.title}
            descriptionPrefix={data.connectBanner.descriptionPrefix}
            formLink={data.connectBanner.formLink}
            formText={data.connectBanner.formText}
            descriptionMiddle={data.connectBanner.descriptionMiddle}
            email={data.connectBanner.email}
            emailText={data.connectBanner.emailText}
            descriptionSuffix={data.connectBanner.descriptionSuffix}
            buttonText={data.connectBanner.buttonText}
            backgroundImage={data.connectBanner.backgroundImage}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}