import React from "react";
import s from './Alica.module.css';


const Alica =() => {
    return (
        <>
        <div className={s.main}>
        <div className={s.user}>
            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUYGRgaHR4cHBwaGhgYGhwaGhgcGhwaHBgcIS4lHB4rIRgcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAABAwIDBQUGAwUHAwUAAAABAAIRAyEEEjEFQVFhcQYigZGhEzKxwdHwQlLhBxRyktIVFjNigpPxVMLiF1WisrP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMBBAX/xAAjEQADAQACAwADAAMBAAAAAAAAAQIRAyESMUEiMlEEYXEj/9oADAMBAAIRAxEAPwDrBRBKCIJgAiRokABBBAIACCCCAAgEEEABBGgAgABHKSXAa79BvPgs9tntK2mCA5reZgnw3fFJVJDTLfo0RPkoOL2xSpjvPFuH6rlu1O1T3yA95HEuIF9Lb1QYnaDybCBxMzfkNP0WeTY/gl7OtVu1rAe7EdHEj4KG/tsGkAht7zDogdDwC5viKD6ge9o7uawAJJMSTAvx84Ck4nY+IIDKVJ5JFw2SB3Wt7w0bq65jfMWC1aK/H+HUdndraFQhpORx5gt81fwuDjAVsPWYyswtkggyCxwJABJBgtk3HhvWxxPaZ9CoxgLnva8tfe0ACGhu+Z8B6MhcOjI1X7P2xRrBpY8S62UkB0jUQrALTAkAjQQASPMiKUgwASSlpCEaBBBAkDUgdUABBJbUabBwJ5EFAVASQDcWKAFI0SCAAUEEEAKUPaO0WUWZnva3r9FG21thmHYSSM3D4Lk3aDaVSu8ve45BcCdbwAp1XxDzP1mj2723Ba5tATxcdSJI0Gg5fHVZQYZ9ce0qkyTDWiL31OscPuzTWtYGl9iQe7ynQxzMK1fiYptLfy5R1iXHnr6nijCm/BoU2Ux3jMaNBMSd5M3JSsFXztc72bGsAIc4jpv32lU73ZnOLz3RqJ1gTAO7cjq7RLm02aNLu8BpFoHqtFNTg8a1gze62+Vu8wJJ6203KvxXad735Q4taTkABggfidPG+vIdVS7Vx4zAA6DjxH6nyCo2VznJ/L8dU3kIzrGG2jRqg0nsa4NYbnURuB1ERqLyFm6HZzG9+o4d4vc9kuaJi8zpfNp/l6A0my9pZGVHauc0tE751HqVbbN7R1C9gc6Wy8ETqIbF/BGowYwj6lFxD3OYQe9muWQ4iTF5BBHULoewe2DX917uk+8AbgyLOEFttd4J0WVxdduIZ7N8ZyMjXxckQACdbkAeKo6NB1N5BPebAjiGgAHnZLTwaZ07s1wIBBkG4PEI5WU7KbRkBoPcNwD+HjBN4k+q1S2a8kZU+LAjQIRphAFEEZRLDQlVbRr1A7u0pA35M0+hVsUAUAYt+OqMe12QtLdxaWyN4NldYas572PAjPBcwmSALZgOBt0kHQq7lJIGsCVpmAQKCBQaBRtoY1tFjnuIEaSYkqQ94aC5xgC65X2y286u/wBmzNl0MXsOnPekqs6HmdGNoY19d7nv0JhoIE8z6gKsebuP4W6CNXDQjjE/FS3nI0CNBYc4+ZlRXOLWtBMmNB930SIq2Rq2HLjmdpDQBziSSfEnxQq5msDQNLjfYgfRGZPHda5nebjdprCeZVY2ABcTvMX6knwWphhWveTYnW1+Z4KDVpQZHEHlb4K6yA8D5eiZfhwjyDwZnsXNukeRTDnXJWkfhGkaXUOtgW6IVCVDKxlbugeJUzAVoIPAE/zGPgFErYUjoktdEDz+/D4ptExmipYo5mQb5p1/KbeZd6K/2lTFQe0Z7zSAeYJAvwOl+QWJwuIh2boB4X/XxWn7P4oPcWE90ggzziVj7Gj2aDs1iQ17XSMpPebyIh334rp7VxvZbS172b296DxBg/Bb/C4tuRpLot97kk1jaLcs6kzTQjhVWysQHvMPzCPzTeRu3K2VdOVoQgggUxgESCCDQIFBKWAFCJ7oE38Lk8gN6IuJ0Hju/X70VVtvbDMO0lzpfFha3M8BqldZ7GmXTxFL222mKVI+0cMx92mDYfxH8Rg6C3mFzjDYoOOZx3yTBHyvw0Cru0O23YmsXEkgHpN+G5LwQLo1gDcd/VIl9ZXfiLfEvkjvkTuA7x9QksoDW44F3yAQoULyTPhPgOPqpLsG99oyDidY5DcldJFJnSrxWNk5WDlzPM8k5hcDUfoIb93V9gNkMZoJ5m5KtqdCEjr+FZhfSio7GIGqN2EDfeHy9VoQxJfQBSOmUUoymJYz8BM+B+qqatB0yty/BtUHGYNoBgIm8FqEzIvpZt33ooOI2c/UD6+i0tLCanmPUz8x5osZhYg+aqrI1xGIfmBi86K82JUyOad5I/T75oYnCCfvVP7PoNBBJ0+/FU0gpxmrge1D/wAzDPX7YtJsuDSA5kX5FZRz+8xomw8rO181qNlf4f8AqKRL8i1fqXuw6Ya8wAJafi36q8VLsb3/APSfi1XcKpy17EIijhBOYEEcIQoGN2uyk/I4PmJlrS4QTG7fZLTw1LXhYZUh5AElQmbTa7QPiJ9x3lpZQtt7cZQpl7jf8LdPTXhdSfIvhSeJtjfaHbvsWndOg/Ef6R92XHO0vaB1SWtdY6xp0HEc0W39u1MQ9znGx9foOSz1R2nxPP79FkrXrKU1KxCsKwk/XTxWhp1cjQGNzvOpIkNHTQeNgqLCG60OwNkmrWa1wNu86dYT08QkS2ajs9gHFud9yfu0K3qUwBYKa+mGNDQLAKBiHLmpnXCK6vhHvP8AjOYODA34kFV+KOJod9r/AGjBqCBIHhqhiNttDixrXuI1yscRHUCE5s/bVOrZrpPC4PkdQhaM89FtsjajK7JaYcNWqwyrGY3Avpv9th7HUtGh5gLR7I2q2szg4aj6ckNI1b9LAsUHFU1YJD2SlaGKOlR+PwP/AIhScRgw4KR+7Q7kVKYy10IGY/F4ODBCGHwrWAvfbKJ3X4XVhtp4a7oqraVQZBwcJ3+NxouiHqOXkWMYweKD3l0kjWfHLoR0W0w+06VKm3PmuCQGtkmI3kgT4rC4CowEw11+QaLR96ble49wyMlwaeYkTA3Tr5rNyga8pNNgO1lBhz5KkQdQxusf5zwU7+/+H/I//wCP1XLMcXNcBIbbTXnbiQPS/JRs7ufl+itpzNF9V/aVjD+Njf4WM+YKYq/tExx92tHSnT/pWdbsLFHTDv8AEZfiQnWdm8WbeyI6uYP+5ZpmFrW7a40yXYmoN8N7tp17oGp9J5K62NtHEvAe+tVdFxnqPLI3veJu0EEC7QSDrEKm2d2Wqkt9q0QC33XAkgbnQCFo6HZytUe0VXAUmuz5GzfKIYwyBI334KfJTzEX4pW6y3Zigyn7Wo7MBdgPHcQBbpaANOWF25j31n56nuk91gm8Try0Wk7QYgEhtob7o3fxHlNxN1isXVJLjxtO8xw4BR40dV9Ir8W6xuJPDRVzjJhS8SdDxE9J0HlfxUBziLhdM+jhp9muwWxu4wtIzfingTxW37JYGM9Q/iNug0WS2FthlfLSDSHkd4RaBqZ4LpmApZGAKLb8sZ1Sp8dQnFsVbWYrHFPUN11OvZaV0ZnH4UjPksXtLT0I1WcwGyHuqDM4sDfxOe05Y0DBzgDp5Lf18PKrquC+yEKmuja40+yJsrElzSDqDfkdCBykT4qXS2fDw9ljvSMHs8MzRbMZjhYD5K7w9OyzQ9BsdxSg5QcXXiwN1QYiriWHMxwcOFvmhBn02ACBCy+F7VFpDa9NzDx3Hor5uOY9mdjpHwPNM10LvZk+1OKHtMvK48VUbVl1BhaSCCYItrz8lD2rii/EPOtyB8I9FbbVofu9Om2pvBJA4HfHL5KsLEc11rZS7GqP/ETOa+7luXVR2ONem0vkBwBs9vLcWu4LnmBoGWuBD26zrLZB113LvWE/w2CPwN/+oTzKquydU5noxrP2fsiHGREf4jhbh3Wj7J4lNf8ApfhfyD/cr/1LegI1TES8mNfu7PyM/lb9EptNo0aB0ACYpY5rpgG2sCSPAX9EpmOpk5Q8TMRcGeF0eSDxr+EjMqLtHiixndu4iABqSZty/RXGKqsY3M94Y21yQ3fpPyVbtTGMyd1tRxaZGSm/W495wDd53pL7WDcbykzmW18M8NLncfjb5jzWPx2JtbiRPSPqtl2r2wajPZ06NUWlxc1og23Am0cdJWExwJLGNZlECxdmkkAFx5yCVOJw6uStRHxevgPRoCiv0UrHjvW4fp8lFeqo5KNl+zLB5qtSofwgNHU3PwC6kXwFgv2YgClUO8vPoxq2dd6hdfkzs4p/FDeJqSUhrlHrPSGvKi2dU+iaXBNveFGquICcZRtMyVugw4k2UzEd1nMpvDUrp/HagcAj4K+3hi9q4iowktAyhpJNyZAmIhQcN2iyuDajTH5mtc4CTGmVpdfe2dVp8bhTqFRjZzWPztYJ1jQSNDGkjy3rZc/TKmn2i3a6m4D3XAgOGjmuad4O9RcLgz7R7aJDWOaJm4DxOgkcVSbJp1BU9k6wLi+x9xrjJA4SfmtdgKjMxawWbA4AG8jqh9MPmlB2d7IVDiQ6u3R5MN91wyy10ndJkfwlJ/ajVHtwwQPZgz0d3QI3AZbdSumYCDldplIk/wCW/wBT5lcd7bbSZXxVUxdzoG45WiBpbUHrdXl6jitZRF7MVyHBm68cQZ18V3fDbUp5QIcIAG6OHFcE7PUj7Uco9TPwXWMNjHta2ANN8rVWV0FSnKZrqOPY85Wm55KTCzOy8Y99VgcwC+oPI7lqMpVCDRhaGEcwSxxdG6XZh0BJ9Cjq7UeWkE5gNzgCR0OoKR7ctdldruI0I4hR8TiS54B3DXefquFv+HpqN9o0mwsUx7iHgGpuc7vEt3hs+70GuvFXlUw0nkucGo5ru6SHC4I1HBRto7ZYGPL6hLspOUy6D1vEHirTzPMwhf8AjbXkniLyph2VX+0JaS9rnPEi7HAhojiGxHNcpxOFy1DJmAQPPX19Vq8JtBgYS1rTDQ2ag6XAP3qszjXMBec2upg7+QECeA0CaWLc4iixJlx8Pgorm2Uio/vGL87+gKj1CrHKzdfs5r5Q9nEhw8oPwC3L3rnPZGWQ/doehP1hb5j5C5OT9md/F+qGsSDFtUzgMc0jK8w8WcDx5cjr4qblVNtXAgnMLHiPu6mdXGpp+LLiqwOEKsGG9nUztcRNnie67nH5hxVZSxz2GHaeh+iuMPimPtIngVo9cNT/ALRaYbGtsJR4h8v5QFD/AHFszCcmEa/pJJb0S2gJnEsYGyRfda55KO/FGcrRLvQdVMw1CLuu7iflwCNCujO4DYtU1n1XlrA4BrWi7gBJk7hrzV9g9nNZoSd9yL8dynhIe9aybpsl4OtlNv8Alcd7c7CdhcU7LPsahL6TuRPeZ1aTEcMvFdSLyN6yf7TsbOHoMIuXlzXRYBjMrgDxJqN8k8V3hHkjrTO9mx3i7orjam2qzSWsqObDbZXFs8dCOHqqfsx7h8PqnttU87pBvBt98CnT/IWl/wCZEd2gxI96tWkcaj/mUX96MT/1FT/cd9VADosCYH5Tby3eiL94/wA7v5lc42dVrs7wd4eabq+8Dy+YTOIxQlrd+qq8Vttja7KbjEg3mwMiB4wVwZvo9lLFrJW0MYGPYSRv3xI5cVl9plhfmBkagSIJneh2ixLn1BlNgSNJgW9Sl7Kogv77IO5pHq7nyuqTOdi1XuQmOfUysa2eJOkm2m/kAFE21hDTaA73jc8ieMW8FvcMxrJc4MBB0DRJtEGwjw4BYvtPVD3Ez9/VUl6zm5JyTKlyQ5KdqkF1wrnGzf8AZukPZALRbPfHdO74Kj7ODujorh7CDmGo+4XHf7HoQvxRbhspnE0pEJWFxAcAn3AFYUTxmYxFItkES1V1aiQc1Of4T8juWur0QoZa0blh1L/JfjjWjGA2k9zQ1zHBw4j5o8djMgEe84hrRzJieg18E1icYxguQs/hNojEYgZTIYRHMk69At8Wzmq5T/6bLA0wLDxned5VoxpUBgiCrKi5CROnoKgyjh8D0UF2IVxiaOdhA1Fx1G7xEjxWMx+2KdNpc51gJgXcbxYdSAsae9Gy012W76vE8+cb1zrthth2Ie1sQykSxg3nNBc89YbblzW6wWH9rSzuf7PO0HKcslrx3O9mi4meC5zj6AOJyMdna57Q10RmzQMwHAnRU45aesny0msRZ9nLNdyJ9APokbZ3QfHxnXdvMrSdn9gt/e6+FLyA17myAJIgxbwWur/s5wz7PfWPRzBp/oVJlutJXySp8TiBxBJhwBO4kd7pKL2w4H+YrtLf2W4Df7c9agHwaFI/9Mtn/kq/7h+itjOXUc9G0HmXFhzu7rY0tqQOH0Wf2phS54LgdJJnUEmI52PorNm1805WkAd1snLmIjTWGiZJngjx7iAHG5MOJjKI3Rvi/Jc0zjPUvkVThGY18WgHTmBGnXopuy6OUl0gE6wZMdVCpPc/3xlbuER/yrLB1BJDWkxvNh0vv8ltE1W9k/E4ixvA5mTxWN2rXl0TKvtrYsNbHoPvxWOrvLiU3HP0jzV8EPdwSCgQkuVjkOgdmK2ZjbiRxWoZdYPsligO6fDxW9oGy5ORfkehxVsoZe0tMt/5Q/tONbJ+q1VmJYpov8DxO3W7pPgsvtXtTBhoJPKw8SVJ2vUDGErB1qhc4k710ccJ9s5eblc9Il47alSrqYHAfM71L7K4rJiG8Hd09dR8I8VTpVNxBDgYIIIPAgyCrOVmHIrflrO44esHBTMM9ZHs/tUVaYcDfRw/K76LTYV64+08Z6Caa1F7hHrD/tI2VkdTcwWrPa2IhstzOyl26XOmOAPArW0KkKdjsAzFUH0XmMwlrtS17bteOh8xI3p5ZOtXZznYdRseyqZqmIYQxjHXa1hAjKzQvmwzaZQdDeP222K7DV8O95DnVBmcBGUGm9vdbbQB4HgtJh9nMouFSmA3F0HD94a58ucwxmezc5jhcHURl1kI/wBq7m1cNhqzLjORPJ7MwPmyP+FVLoi61pCabyzamYCBWcHXn8//AIO9eK6YVzPtBdmBxLLF7ZngQcwM9HvJ6LpbXyA7cQD5iU8fSV+kw0aKUqE5M81YJxeQIkAtAadC5xOVvzPIFWW1KoLzl7wYCxv+d4s+oeUyB06qNg67GAQCcgJBNpMBuYgaakASdNyS3GhrC9wuTDRAgDfAH35qDR2aJwbJPfM30/RW+GqtghgEb3aAfU+KqGMkRck6+OonklYrGZWhjLAcLeKM0PLxGNr1g5339hU756J11TMbIqjVRLEQqtZEcUgp57U3CYmXXZz3x97wui4SrYfFc97N3cRy9JF1vsIwZRqubl9ndw/qTHvlV2OrhoKGKLmjuk9Dv8VnNpYiRM2+f6JJnWVqsWlDt/HF7iJsqaE9iXy4lMldcrEeddeT0ACOEGpQGiYQnbH2i6g4PFwbOb+YfUbl1LZWMa9rXNMtIkHkVyCody0vYzapa72Tj3XGW8jvHQ69Z4qPLGrUdHDyY/F+jrFJysMLXylVGFqSFMY5c6Z00tGu2ewP3hrcVh5biaTdWWc+nvaI1cJMcQSLyFzvG7Ue/Cmg4kta9j2yNCZBEDQGZ6zxXXdn4qLSsp207NNbmxNFoyPcHVWi2V0z7QD8pOvA33mLzWog14vGUFLHl+AosLjNF7mQRoC5zfg7Q8FuNn7fikzNVDe43UD8rRGixWAw49k9se+8ukbpM8Lee9KO0nMyMbhXvGUAvBgA5RBjIZFxv+EITe9DVM52b9m3mnSs3yH9Ks/7Q6+i5K3bOIzAfuL9Y/xBH/5haL+8G0P/AG4/7jv6U+sj4o5ZRpuDIMy6Pj9+itNn4EP7zzDWwfC+W/P663URlUtDWMAzOvmcd0fl4Re/K06O4jE5aYY0G7rl0uLjqXGfeJtrawF4WD7hKxNRozRp6mLCOSzuNrzPqp2OrGACbm558LqoIkrZQtVo/SZASap3BKquUcGSnJgISHmE8SmCy6BSx2E/vwTE6EbiPluXR9lvzNINnCJEz4jkuW4N+V4I3ELo+yakvG8ZfSRChyLs6uCusLPE0RBJWL2+/IHCNT8QCtpiqndM+A+ZPouddocQM8A3uTv1WQuxuWvxKKqZKKUTUZC6UcQQTo3JuEpp+CAAOKWyxBBgiCORF0mNEErGR1/sztAVqLHbyL8nCx9QtBTK5b2D2nkqGi42f3m/xAd4eIE/6V06g5ctz41h2xXlOktj4Vtg8QCMrgCCIINwQdQRvVQgzFZd6yXjMpaip2xsD92eXMcfYPNt5YdchPDWCemutO2qHPdYjS3CBC31LGOe0sdTaWOs7O4wR5W8lgduYLPVcMNi3U2zEU6jnsBgRld3SN4IuLCDMhWnvsnrzGP02d9pvr9lb/OOC5ZT2A8ul2Nqz/E/fvjOr/8AuY7/AK3Eebv6k6EenMKuIcHkjfAmPwjgU3VqQ1swS4nw0v1R1XBgBN+A8kziRdvO/m4rUjaWCa75J5JiiN6cfvKS33UxJjVVyFNqJ5SqWhKDAaoZbIMCOq64CACoM1W82NWDc73EAQADyEn5rD4fUTpN+isq+Oc7uM8I9T1+CSp0pFYWG3O0LngsZYev/KzNekfedqdx4byrtmHZSZnfGY6A8Y4b3fBUlaqXkkpplIW6bGWtRJSBTExshKYUCElqAHRvCSEbhvSHlY0ah7CYosqNeNWODvIyR46eK7bs/EhzGvBGUgOndBEz5LhQC3XZfEurtp4cmGUxmf8A5+9DGfwgajfAUuSdW/wvw1nR0KjWL7t93cdM3PjHr0tL1R7GNL3uDWtBJJgAAXPIBN06gaOAHwXNdubWqYw+/koz3WbyAbOde53xu9VKZ0v38J+3O1T8Q/2NNzmUQe9+Fz448Gn8up38FR4XHuY4FkhoOhJOt7/fDVVFMND3FxiCepurTDbSLzkyEgkWmR4jcr5i6Jy0+m8NtszEMrBj5DX5spzGA4690m09eC3P7wPzN/nZ9VyDF45xdkYLCxsddbcIjVH7bEfmd5lYPUTvWmXxNXMdFKxXdY0nUBjB1ABcfA2UfB0S54b4noLnz08Qn9o1SSBaAeAuZlx03lMczbfsZdvHMIVTEfeiJhuespus6fgmEYwSn6PulNvbCOkbFBoth0+96RV1Rt3JVRuhQAQdCOliXN92AeNifVN1beXzTI0QYOueS4lxLjzMo5TbDZGNUGMD+CUAiciJWmBE3SHIByOEAG125E9E5pi6kYalmWM1EnA0e6XFpM2EDpJ+SfwW0X4dz8hLXPgHSRE6E6aqEKzzDGkgTAA3knfxVptFjSzM4wdx58Er/h0TOy2vhBOKe98ve58m+Yl5idAXJWNDWPBYQbAiN1+H36p7Y4bJcYJFiCLAFRyyXucwAAGw1tpodeP2AgzGpT/oy5lyXOvqeJJ1hBj790ERwN/NO1352ghoBnvHSTuSXYZ4dkAJ6aHxTE2mSsFXfPceRFyZhoHE7vvyuv7Xpc/L9VX4OnSALHPlzgJjcdYBH13KZ+4U/wAg83KdPs7eKK8emiFhmtYAW++5oHh9/BVmKaS7fYqe+r3XFosAG+lz5fEKKH5xI4p0crG4+KGW8cPinSY+v0SAIbJ1N1ouEdze75lCmICec3dy+P8Aykhm5BmAY24H393TwZq1MvMXCmOu1rxv+KXQwg1225pvDNG9SqrJUZpyuugxicRTg20SSYR1DKQEwCwUkiSiUui0NEnVZpmEcUSNbINeBuTtbidVGK3TGgqj5R0Hw4InIMbcIYIn06YJcWSXN7wBgaG8JLKFR+5xvqdBzuiw9UscXgTFvPf6JwbRfxHkl7LxU52TX4YMpug6i5+HRVVCtl6KVhcU5zsru811iD8UeIwrGO7zrG4aASY6oXQ/I1STn0iO18usJ3x67kp9RzySXceQ6BKoNzZsgItMm5A4W4/VHTpTxy8YPHWB93TEO2N4agXuDQNfhvK0/wDZrPzu/mKrZbS7tMZnEDM9wjUTAG77um/bVPzO/lSHVDiFlEfEVhkAaAJknxP6BN4NliZmTu9dUyP+36KQ2zWpzk0Opchg0m/QapVXvODQOZ6DRN0fePKEeH1eeQQMmCg3M53T5ogN/gnNnfi6Imajr8igBDaeo5Sntlulj2n8JkdCkYb/ABfNDZvvv+96VggV2WI4fYUR1POLajVWFff0+ah4H3vNavQZrIbmEGIuiDjwV9XpAlphFiKDSG2Gn0WA5wqKbLyll90mok7h0TCDjiN6byykDXwTjNPJAAfSgZjv0Hz6JvDNzOHK/kpGP3cgPgnNlj3+gQBHfIBPNNNensVqepTDN6AY5TYSQBqdFK2oe+AdzR9U2z3DyI+aOtdrDvjXoUDJ/jgj2jssAkN5WB68VLw2OyMLWgd+cxIBtpAVdXec0TbhuUijZo5z8UAnj6L7EbQZ7NjnMBLxBAicwi+bcFXfvTPyv/mH9KrXVXHUkxpyQWJDVyts/9k=' alt='girl' ></img> 
            <h5>Alica</h5>
        </div>

        <div className={s.text}>
            Guten tag.
        </div>


<div className={s.yourMessage}>
    <input type='text'></input>
    <button>send</button>
</div>


        </div>
        </>
    )
}



export default Alica;